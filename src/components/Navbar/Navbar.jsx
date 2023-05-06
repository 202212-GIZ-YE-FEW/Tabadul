import { onAuthStateChanged, signOut } from "firebase/auth";
import { useTranslation, withTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import { auth } from "@/utils/firebase";

import {
    Arrow,
    CancelIcon,
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
    LinkDiv,
    Mynav,
    Nav,
    NavButtons,
    Navmenubar,
    Navmenubardiv,
    Navmenulist,
} from "./Nav.styled";
import { NavItem } from "./NavItem";

function Navbar() {
    const { t } = useTranslation("common");
    const translateMe = (word) => {
        return t(word);
    };

    const MENU_LIST = [
        {
            id: 1,
            text: translateMe("home"),

            href: "/",
        },

        { id: 2, text: translateMe("aboutus"), href: "/Aboutus" },

        { id: 3, text: translateMe("Products"), href: "/Products" },

        { id: 4, text: translateMe("Blogs"), href: "/Blogs" },

        { id: 5, text: translateMe("profile"), href: "/Profile" },
    ];

    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(false);
    const [navdroplan, setNavdroplan] = useState(false);
    const [navdrop, setNavdrop] = useState(false);
    const [width, setWidth] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
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

    useEffect(() => {
        let cb = function () {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", cb);

        return () => {
            window.removeEventListener("resize", cb);
        };
    }, []);

    useEffect(() => {
        if (width > 700) {
            setNavActive(false);
        }
    }, [width]);

    return (
        <Header>
            <Nav>
                <Homeiconlink href='/'>
                    <Homeicon onClick={() => setActiveIdx(false)}>
                        <IconVector src='/images/Logo.svg' />
                    </Homeicon>
                </Homeiconlink>

                <Navmenubar
                    onClick={() => {
                        setNavActive((prevState) => !prevState);
                    }}
                >
                    <Navmenubardiv></Navmenubardiv>
                    <Navmenubardiv></Navmenubardiv>
                    <Navmenubardiv></Navmenubardiv>
                </Navmenubar>
                <Mynav>
                    <Navmenulist navActive={navActive}>
                        {MENU_LIST.map((menu, idx) => {
                            return (
                                <div
                                    //ToDo: Style this to center it
                                    onClick={() => {
                                        setActiveIdx(idx);
                                        setNavActive((prevState) => !prevState);
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
                        <CancelIcon
                            navActive={navActive}
                            onClick={() => {
                                setNavActive((prevState) => !prevState);
                            }}
                        >
                            X
                        </CancelIcon>
                    </Navmenulist>

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
                                        <LinkDiv>
                                            <Lanlink href='/Signin'>
                                                {translateMe("Login")}
                                            </Lanlink>
                                        </LinkDiv>
                                    )}
                                    {!isAuthenticated && (
                                        <LinkDiv>
                                            <Lanlink href='/Signup'>
                                                {translateMe("Signup")}
                                            </Lanlink>
                                        </LinkDiv>
                                    )}
                                    {isAuthenticated && (
                                        <LinkDiv>
                                            <Lanlink onClick={signout} href='/'>
                                                {translateMe("Logout")}
                                            </Lanlink>
                                        </LinkDiv>
                                    )}
                                </Dropdowncontent>
                            )}
                        </Dropdown>
                        <Dropdown>
                            <Dropbtn
                                onClick={() => setNavdroplan(!navdroplan)}
                                onBlur={() =>
                                    setTimeout(() => setNavdroplan(false), 100)
                                }
                            >
                                <Imageicon src='/images/flag.svg' />
                                <Arrow src='/images/arrow.svg' />
                            </Dropbtn>
                            {navdroplan && (
                                <Dropdowncontent>
                                    <LinkDiv>
                                        <Lanlink href='#' locale='en'>
                                            {translateMe("English")}
                                            <Lan src='/images/flag.svg' />
                                        </Lanlink>
                                    </LinkDiv>
                                    <LinkDiv>
                                        <Lanlink href='#' locale='ar'>
                                            {translateMe("Arabic")}
                                            <Lan src='/images/Saudi Arabia.svg' />
                                        </Lanlink>
                                    </LinkDiv>
                                </Dropdowncontent>
                            )}
                        </Dropdown>
                    </NavButtons>
                </Mynav>
            </Nav>
        </Header>
    );
}

export default Navbar;

// export async function getStaticProps({ locale }) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ["common"])),
//             // Will be passed to the page component as props
//         },
//     };
// }
