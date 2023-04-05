import React from "react";

import Team from "@/components/Team";

import { teams } from "./about";
function Aboutus() {
    return (
        <div>
            {teams?.map((member) => {
                return (
                    <Team
                        key={member.id}
                        Surename={member.Surename}
                        Desctitle={member.desctitle}
                        MemberImg={member.teamImg}
                    />
                );
            })}
        </div>
    );
}

export default Aboutus;
