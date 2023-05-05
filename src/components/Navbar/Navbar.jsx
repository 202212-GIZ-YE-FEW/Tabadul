import { onAuthStateChanged, signOut } from "firebase/auth";
import { withTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import { auth } from "@/utils/firebase";

import {
    Arrow,
    Dropbtn,
    Dropdown,
    Dropdowncontent,
    Header,
    Homeicon,
    Homeiconlink,
    IconVector,
    Imageicon,
    Lan,
    Lanlink,
    Mynav,
    Nav,
    NavButtons,
    Navmenubar,
    Navmenubardiv,
    Navmenulist,
} from "./Nav.styled";
import { NavItem } from "./NavItem";
function Navbar({ t }) {
    const MENU_LIST = [
        {
            id: 1,
            text: t("home"),

            href: "/",
        },

        { id: 2, text: t("aboutus"), href: "/Aboutus" },

        { id: 3, text: t("Products"), href: "/Products" },

        { id: 4, text: t("Blogs"), href: "/Blogs" },

        { id: 5, text: t("profile"), href: "/Profile" },
    ];

    // const router = useRouter();

    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(false);
    const [navdroplan, setNavdroplan] = useState(false);
    const [navdrop, setNavdrop] = useState(false);
    const [width, setWidth] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const signout = async () => {
        await signOut(auth);
    };

    useEffect(() => {
        const Listerner = onAuthStateChanged(auth, async (user) => {
            setIsAuthenticated(Boolean(user));
        });
        return () => {
            Listerner();
        };
    }, []);
    return (
        <Header>
            <Nav>
                <Homeiconlink href='/'>
                    <Homeicon onClick={() => setActiveIdx(false)}>
                        <IconVector src='/images/Logo.svg' />
                    </Homeicon>
                </Homeiconlink>

                <Navmenubar
                    onClick={() => setNavActive((prevState) => !prevState)}
                    onBlur={() => setNavdrop((prevState) => !prevState)}
                >
                    <Navmenubardiv></Navmenubardiv>
                    <Navmenubardiv></Navmenubardiv>
                    <Navmenubardiv></Navmenubardiv>
                </Navmenubar>
                <Mynav>
                    {(navActive || width > 1000) && (
                        <Navmenulist>
                            {MENU_LIST.map((menu, idx) => {
                                return (
                                    <div
                                        //ToDo: Style this to center it
                                        onClick={() => {
                                            setActiveIdx(idx);
                                            setNavActive(
                                                (prevState) => !prevState
                                            );
                                        }}
                                        key={menu.text}
                                    >
                                        <NavItem
                                            active={activeIdx === idx}
                                            {...menu}
                                        />
                                    </div>
                                );
                            })}
                        </Navmenulist>
                    )}
                    <NavButtons>
                        <Dropdown>
                            <Dropbtn
                                onClick={() => setNavdrop(!navdrop)}
                                onBlur={() =>
                                    setTimeout(() => setNavdrop(false), 100)
                                }
                            >
                                <Imageicon src='/images/users.svg' />
                            </Dropbtn>

                            {navdrop && (
                                <Dropdowncontent>
                                    {!isAuthenticated && (
                                        <Lanlink href='/Signin'>
                                            {t("Login")}
                                        </Lanlink>
                                    )}
                                    {!isAuthenticated && (
                                        <Lanlink href='/Signup'>
                                            {t("Signup")}
                                        </Lanlink>
                                    )}
                                    {isAuthenticated && (
                                        <Lanlink onClick={signout} href='/'>
                                            {t("Logout")}
                                        </Lanlink>
                                    )}
                                </Dropdowncontent>
                            )}
                        </Dropdown>
                        <Dropdown>
                            <Dropbtn
                                onClick={() => setNavdroplan(!navdroplan)}
                                // onBlur={() => setNavdroplan(!navdroplan)}
                            >
                                <Imageicon src='/images/flag.svg' />
                                <Arrow src='/images/arrow.svg' />
                            </Dropbtn>
                            {navdroplan && (
                                <Dropdowncontent>
                                    <Lanlink href='' locale='en'>
                                        {t("English")}
                                        <Lan src='/images/flag.svg' />
                                    </Lanlink>
                                    <Lanlink href='' locale='ar'>
                                        {t("Arabic")}
                                        <Lan src='/images/Saudi Arabia.svg' />
                                    </Lanlink>
                                    <Lanlink href=''>
                                        {t("Turkish")}
                                        <Lan src='/images/Turkey.svg' />
                                    </Lanlink>
                                </Dropdowncontent>
                            )}
                        </Dropdown>
                    </NavButtons>
                </Mynav>
            </Nav>
        </Header>
    );
}

export default withTranslation("common")(Navbar);
