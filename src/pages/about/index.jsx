import React from "react";

import Team from "@/components/Team";

import {
    AboutImg,
    AboutSection,
    Container,
    HeadingContent,
    HeroSection,
    ImgContent,
    ParagrhContent,
    TeamHeading,
    TeamMemberContainer,
    TeamSection,
    TextContent,
} from "./about.styled";
import AboutPhoto from "../../assets/Image/About.svg";
import { TEAMS } from "../../../data/db";
function About() {
    return (
        <AboutSection>
            <Container>
                <HeroSection>
                    <TextContent>
                        <HeadingContent>Who we are</HeadingContent>
                        <ParagrhContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </ParagrhContent>
                    </TextContent>
                    <ImgContent>
                        <AboutImg
                            src={AboutPhoto}
                            alt='AboutPhoto'
                            width={896}
                            height={651}
                            priority={true}
                        />
                    </ImgContent>
                </HeroSection>
                <TeamSection>
                    <TeamHeading>Our Team</TeamHeading>
                    <TeamMemberContainer>
                        {TEAMS.map((member) => {
                            return (
                                <Team
                                    key={member.id}
                                    Surename={member.Surename}
                                    Desctitle={member.desctitle}
                                    MemberImg={member.teamImg}
                                />
                            );
                        })}
                    </TeamMemberContainer>
                </TeamSection>
            </Container>
        </AboutSection>
    );
}

export default About;