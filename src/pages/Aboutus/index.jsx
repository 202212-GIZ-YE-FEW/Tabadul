import React from "react";

import Team from "@/components/Team";

import { teams } from "./about";
function Aboutus() {
    return (
        <>
            {teams?.map((team) => {
                return (
                    <Team
                        key={team.id}
                        surename={team.surename}
                        desctitle={team.desctitle}
                        memberimg={team.teamImg}
                    />
                );
            })}
        </>
    );
}

export default Aboutus;
