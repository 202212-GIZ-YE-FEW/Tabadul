import React from "react";

import { TeamCard, TeamDesc, TeamImg, TeamTitle } from "../Team/Team.styled";
function Team({ surename, desctitle, memberimg }) {
    return (
        <TeamCard>
            <TeamImg src={memberimg} alt='TeamImg' />
            <TeamTitle>{surename}</TeamTitle>
            <TeamDesc>{desctitle}</TeamDesc>
        </TeamCard>
    );
}

export default Team;
