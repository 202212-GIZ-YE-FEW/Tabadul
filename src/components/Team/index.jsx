import React from "react";

import { TeamCard, TeamDesc, TeamImg, TeamTitle } from "./team.styled";
function Team({ Surename, Desctitle, MemberImg }) {
    return (
        <TeamCard>
            <TeamImg src={MemberImg} alt='TeamImg' />
            <TeamTitle>{Surename}</TeamTitle>
            <TeamDesc>{Desctitle}</TeamDesc>
        </TeamCard>
    );
}

export default Team;
