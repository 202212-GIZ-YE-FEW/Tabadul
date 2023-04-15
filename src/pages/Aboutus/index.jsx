import { team } from "data/db";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
    const { t } = useTranslation("common");
    return (
        <AboutSection>
            <AboutContainer>
                <HeroSection>
                    <TextContent>
                        <HeadingContent>{t("aboutheroheader")}</HeadingContent>
                        <ParagrhContent>
                            {t("aboutheroparagraph")}
                        </ParagrhContent>
                    </TextContent>
                    <ImgContent>
                        <AboutImg
                            src={AboutPhoto}
                            alt='AboutPhoto'
                            width={896}
                            height={651}
                            priority='true'
                        />
                    </ImgContent>
                </HeroSection>
                <TeamSection>
                    <TeamHeading>{t("teamheading")}</TeamHeading>
                    <TeamMemberContainer>
                        {team?.map((member) => {
                            return (
                                <TeamMember
                                    key={member.id}
                                    surename={member.surename}
                                    desc={member.desc}
                                    Imgmember={member.memberImg}
                                />
                            );
                        })}
                    </TeamMemberContainer>
                </TeamSection>
            </AboutContainer>
        </AboutSection>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
export default Aboutus;
