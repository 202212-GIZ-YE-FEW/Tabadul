import React from "react";

import { Navlink } from "./Nav.styled";

export const NavItem = ({ href, active, text }) => {
    return (
        <Navlink href={href} active={active}>
            <span dangerouslySetInnerHTML={{ __html: text }} />
        </Navlink>
    );
};
