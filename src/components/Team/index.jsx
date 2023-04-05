import React from "react";

import { TeamCard, TeamDesc, TeamImg, TeamTitle } from "./Team.styled";
import mebmerImg from "../../assets/Image/TeamPhoto.svg";
function Team() {
    return (
        <TeamCard>
            <TeamImg src={mebmerImg} alt='member' property={true} />
            <TeamTitle>Surename Y</TeamTitle>
            <TeamDesc>Description for member</TeamDesc>
        </TeamCard>
    );
}

export default Team;
