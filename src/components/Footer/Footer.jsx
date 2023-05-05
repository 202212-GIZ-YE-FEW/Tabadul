import { withTranslation } from "next-i18next";
import React from "react";

import {
    Container,
    Footercss,
    Imgsocial,
    Imgsociallogo,
    PagesList,
    Section,
    Social,
    SocialLink,
} from "./Footer.style";

function Footer({ t }) {
    return (
        <Footercss>
            <Container>
                <Section>
                    <Imgsociallogo
                        src='/images/footerlogo.svg'
                        alt=''
                        width={50}
                        height={50}
                    />
                </Section>

                <Section>
                    <PagesList href='/Aboutus'>{t("Aboutus")}</PagesList>
                    <PagesList href='/Blogs'>{t("Blogs")}</PagesList>
                    <PagesList href='/Products'>{t("Listeditems")}</PagesList>
                </Section>

                <Section>
                    <p>{t("ContactUs")}</p>

                    <Social>
                        <SocialLink>
                            <Imgsocial
                                src='/images/facebook .svg'
                                alt=''
                                width={50}
                                height={50}
                            />
                        </SocialLink>

                        <SocialLink>
                            <Imgsocial
                                src='/images/instagram (2).svg'
                                alt=''
                                width={50}
                                height={50}
                            />
                        </SocialLink>

                        <SocialLink>
                            <Imgsocial
                                src='/images/linkedin (2).svg'
                                alt=''
                                width={50}
                                height={50}
                            />
                        </SocialLink>

                        <SocialLink>
                            <Imgsocial
                                src='/images/share.svg'
                                alt=''
                                width={50}
                                height={50}
                            />
                        </SocialLink>
                    </Social>
                </Section>

                <Section>
                    <p>{t("Address")}</p>
                    <p>{t("street")}</p>
                    <p>{t("YemenSanaa")}</p>
                </Section>
            </Container>
        </Footercss>
    );
}

export default withTranslation("footer")(Footer);
