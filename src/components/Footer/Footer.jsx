import { useTranslation, withTranslation } from "next-i18next";
import React from "react";

import {
    Container,
    Footercss,
    Imgsocial,
    Imgsociallogo,
    LinkSoial,
    PagesList,
    Section,
    Social,
    SocialLink,
} from "./Footer.style";
import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();
    const { t } = useTranslation("footer");
    const translateMe = (word) => {
        return t(word);
    };

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
                    <PagesList href={`/${router.locale}/Aboutus`}>
                        {translateMe("Aboutus")}
                    </PagesList>
                    <PagesList href={`/${router.locale}/Blogs`}>
                        {translateMe("Blogs")}
                    </PagesList>
                    <PagesList href={`/${router.locale}/Products`}>
                        {translateMe("Products")}
                    </PagesList>
                </Section>

                <Section>
                    <p>{translateMe("ContactUs")}</p>

                    <Social>
                        <LinkSoial href='#'>
                            <SocialLink>
                                <Imgsocial
                                    src='/images/facebook .svg'
                                    alt=''
                                    width={50}
                                    height={50}
                                />
                            </SocialLink>
                        </LinkSoial>
                        <LinkSoial href='#'>
                            <SocialLink>
                                <Imgsocial
                                    src='/images/instagram (2).svg'
                                    alt=''
                                    width={50}
                                    height={50}
                                />
                            </SocialLink>
                        </LinkSoial>
                        <LinkSoial href='#'>
                            <SocialLink>
                                <Imgsocial
                                    src='/images/linkedin (2).svg'
                                    alt=''
                                    width={50}
                                    height={50}
                                />
                            </SocialLink>
                        </LinkSoial>
                        <LinkSoial href='#'>
                            <SocialLink>
                                <Imgsocial
                                    src='/images/share.svg'
                                    alt=''
                                    width={50}
                                    height={50}
                                />
                            </SocialLink>
                        </LinkSoial>
                    </Social>
                </Section>

                <Section>
                    <p>{translateMe("Address")}</p>
                    <p>{translateMe("street")}</p>
                    <p>{translateMe("YemenSanaa")}</p>
                </Section>
            </Container>
        </Footercss>
    );
}

export default Footer;
