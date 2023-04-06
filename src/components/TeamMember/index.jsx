import React from "react";

import { TeamCard, TeamDesc, TeamImg, TeamTitle } from "./TeamMember.styled";
function TeamMember({ surename, desc, Imgmember }) {
    return (
        <TeamCard>
            <TeamImg
                src={Imgmember}
                alt='member'
                width={300}
                height={300}
                property='true'
            />
            <TeamTitle>{surename}</TeamTitle>
            <TeamDesc>{desc}</TeamDesc>
        </TeamCard>
    );
}

export default TeamMember;
