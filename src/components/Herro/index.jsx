import DonateButton from "./DonateButton";
import {
    Container,
    HeroSection,
    InnerContainer,
    LeftSideDiv,
    Line,
} from "./hero.style";
import IntroductionImage from "./IntroductionImage";
import IntroductionText from "./IntroductionText";
function Hero() {
    return (
        <HeroSection>
            <Container>
                <InnerContainer>
                    <LeftSideDiv data-aos='fade-right'>
                        <IntroductionText />
                        <DonateButton />
                    </LeftSideDiv>
                    <IntroductionImage />
                </InnerContainer>
                <Line />
            </Container>
        </HeroSection>
    );
}

export default Hero;
