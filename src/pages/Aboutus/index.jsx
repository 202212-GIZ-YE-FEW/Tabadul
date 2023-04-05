import React from "react";

import TeamMember from "@/components/TeamMember";

import AboutPhoto from "../../assets/Image/About.svg";
import {
    AboutContainer,
    AboutImg,
    AboutSection,
    HeadingContent,
    HeroSection,
    ImgContent,
    ParagrhContent,
    TeamHeading,
    TeamMemberContainer,
    TeamSection,
    TextContent,
} from "../../styles/aboutus.styled";
function Aboutus() {
    return (
        <AboutSection>
            <AboutContainer>
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
                        <TeamMember />
                    </TeamMemberContainer>
                </TeamSection>
            </AboutContainer>
        </AboutSection>
    );
}

export default Aboutus;
