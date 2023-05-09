import { team } from "data/db";
import { useTranslation, withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
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
                    <TextContent data-aos='fade-right'>
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

export default Aboutus;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "footer"])),
            // Will be passed to the page component as props
        },
    };
}
