import { useEffect, useState } from "react";

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
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";

const MENU_LIST = [
    {
        id: 1,
        text: "Home",

        href: "/",
    },

    { id: 2, text: "About us", href: "/Aboutus" },

    { id: 3, text: "Products", href: "/Products" },

    { id: 4, text: "Blogs", href: "/Blogs" },

    { id: 5, text: "profile", href: "/Profile" },
];

export default function Navbar() {
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
                                                Log in
                                            </Lanlink>
                                        </LinkDiv>
                                    )}
                                    {!isAuthenticated && (
                                        <LinkDiv>
                                            <Lanlink href='/Signup'>
                                                Sign up
                                            </Lanlink>
                                        </LinkDiv>
                                    )}
                                    {isAuthenticated && (
                                        <LinkDiv>
                                            <Lanlink onClick={signout} href='/'>
                                                Log out
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
                                            English
                                            <Lan src='/images/flag.svg' />
                                        </Lanlink>
                                    </LinkDiv>
                                    <LinkDiv>
                                        <Lanlink href='#' locale='ar'>
                                            Arabic
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
