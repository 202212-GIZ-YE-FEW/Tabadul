import { useEffect, useState } from "react";

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
import Router from "next/router";

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
    // const router = useRouter();

    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(false);
    const [navdroplan, setNavdroplan] = useState(false);
    const [navdrop, setNavdrop] = useState(false);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        let dir = Router.locale == "ar" ? "rtl" : "ltr";
        let lang = Router.locale == "ar" ? "ar" : "en";
        document.querySelector("html").setAttribute("dir", dir);
        document.querySelector("html").setAttribute("lang", lang);
    }, [Router]);
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
                                    <Lanlink href='/Signin'>Log in</Lanlink>
                                    <Lanlink href='/Signup'>Sign up</Lanlink>
                                    <Lanlink href='#'>Log out</Lanlink>
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
                                    <Lanlink href='#' locale='en'>
                                        English
                                        <Lan src='/images/flag.svg' />
                                    </Lanlink>
                                    <Lanlink href='#' locale='ar'>
                                        Arabic
                                        <Lan src='/images/Saudi Arabia.svg' />
                                    </Lanlink>
                                    <Lanlink href='#'>
                                        Turkish
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
