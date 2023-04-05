import React from "react";

import {
    AboutImg,
    AboutSection,
    // Container,
    // HeadingContent,
    // HeroSection,
    // ImgContent,
    // ParagrhContent,
    // TeamHeading,
    // TeamMemberContainer,
    // TeamSection,
    // TextContent,
} from "./About.styled";
import AboutPhoto from "../../assets/Image/About.svg";

function About() {
    return (
        <AboutSection>
            {/* <Container>
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
                      
                    </ImgContent>
                </HeroSection>
                <TeamSection>
                    <TeamHeading>Our Team</TeamHeading>
                    <TeamMemberContainer></TeamMemberContainer>
                </TeamSection>
            </Container> */}
            <AboutImg
                src={AboutPhoto}
                alt='AboutPhoto'
                width={896}
                height={651}
                priority={true}
            />
        </AboutSection>
    );
}

export default About;
