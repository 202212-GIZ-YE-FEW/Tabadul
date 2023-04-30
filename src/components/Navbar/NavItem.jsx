import React from "react";

import { Navlink } from "./Nav.styled";
import { useRouter } from "next/router";

export const NavItem = ({ href, active, text }) => {
    const router = useRouter();

    return (
        <Navlink href={`/${router.locale}${href}`} active={active}>
            <span dangerouslySetInnerHTML={{ __html: text }} />
        </Navlink>
    );
};
