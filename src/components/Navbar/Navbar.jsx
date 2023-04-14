import { useState } from "react";

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

const MENU_LIST = [
    {
        id: 1,
        text: "Home",

        href: "/",
    },

    { id: 2, text: "About US", href: "#" },

    { id: 3, text: "Products", href: "#" },

    { id: 4, text: "Blogs", href: "#" },

    { id: 5, text: "profile", href: "#" },
];

export default function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(false);
    const [navdroplan, setNavdroplan] = useState(false);
    const [navdrop, setNavdrop] = useState(false);
    const width = null;
    return (
        <Header>
            <Nav>
                <Homeiconlink href='/'>
                    <Homeicon onClick={() => setActiveIdx(false)}>
                        <IconVector src='./images/Logo.svg' />
                    </Homeicon>
                </Homeiconlink>

                <Navmenubar
                    onClick={() => setNavActive(!navActive)}
                    onBlur={() => setNavdrop(!navdrop)}
                >
                    <Navmenubardiv></Navmenubardiv>
                    <Navmenubardiv></Navmenubardiv>
                    <Navmenubardiv></Navmenubardiv>
                </Navmenubar>
                <Mynav>
                    {(navActive || width > 768) && (
                        <Navmenulist>
                            {MENU_LIST.map((menu, idx) => {
                                return (
                                    <div
                                        onClick={() => {
                                            setActiveIdx(idx);
                                            setNavActive(false);
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
                                onBlur={() => setNavdrop(!navdrop)}
                            >
                                <Imageicon src='./images/users.svg' />
                            </Dropbtn>

                            {navdrop && (
                                <Dropdowncontent>
                                    <Lanlink href='#'>Log in </Lanlink>
                                    <Lanlink href='#'>Sign up</Lanlink>
                                    <Lanlink href='#'>Log out</Lanlink>
                                </Dropdowncontent>
                            )}
                        </Dropdown>
                        <Dropdown>
                            <Dropbtn
                                onClick={() => setNavdroplan(!navdroplan)}
                                onBlur={() => setNavdroplan(!navdroplan)}
                            >
                                <Imageicon src='./images/flag.svg' />
                                <Arrow src='./images/arrow.svg' />
                            </Dropbtn>
                            {navdroplan && (
                                <Dropdowncontent>
                                    <Lanlink href='#'>
                                        English
                                        <Lan src='./images/flag.svg' />
                                    </Lanlink>
                                    <Lanlink href='#'>
                                        Arabic
                                        <Lan src='./images/Saudi Arabia.svg' />
                                    </Lanlink>
                                    <Lanlink href='#'>
                                        Turkish
                                        <Lan src='./images/Turkey.svg' />
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
