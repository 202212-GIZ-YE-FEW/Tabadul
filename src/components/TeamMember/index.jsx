import React from "react";

import { TeamCard, TeamDesc, TeamImg, TeamTitle } from "./TeamMember.styled";
import mebmerImg from "../../assets/Image/TeamPhoto.svg";
function TeamMember() {
    return (
        <TeamCard>
            <TeamImg src={mebmerImg} alt='member' property={true} />
            <TeamTitle>Surename</TeamTitle>
            <TeamDesc>Description for member</TeamDesc>
        </TeamCard>
    );
}

export default TeamMember;
