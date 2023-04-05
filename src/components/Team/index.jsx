import React from "react";

// import { TeamCard, TeamDesc, TeamImg, TeamTitle } from "./Team.styled";
import { TeamCard, TeamDesc, TeamImg, TeamTitle } from "./Team.styled";
// import simpleImg from "../../assets/Image/TeamPhoto.svg";
import mebmerImg from "../../assets/Image/TeamPhoto.svg";
function Team() {
    return (
        // <TeamCard>
        //     <TeamImg src={simpleImg} alt='TeamImg' priority={true} />
        //     <TeamTitle>Name Surename</TeamTitle>
        //     <TeamDesc>Description for member</TeamDesc>
        // </TeamCard>
        <TeamCard>
            <TeamImg src={mebmerImg} alt='member' property={true} />
            <TeamTitle>Surename</TeamTitle>
            <TeamDesc>Description for member</TeamDesc>
        </TeamCard>
    );
}

export default Team;
