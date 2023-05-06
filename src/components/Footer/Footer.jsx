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
    LinkSoial,
} from "./Footer.style";

function Footer() {
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
                    <PagesList href='/Aboutus'>About us</PagesList>
                    <PagesList href='/Blogs'>Blogs</PagesList>
                    <PagesList href='/Products'>Products</PagesList>
                </Section>

                <Section>
                    <p>Contact Us</p>

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
                    <p>Address</p>
                    <p>street 01,07</p>
                    <p>Yemen, Sanaa</p>
                </Section>
            </Container>
        </Footercss>
    );
}

export default Footer;
