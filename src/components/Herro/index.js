import DonateButton from "./DonateButton";
import { Container, LeftSideDiv, Line } from "./hero.style";
import IntroductionImage from "./IntroductionImage";
import IntroductionText from "./IntroductionText";

function Hero() {
    return (
        <Container>
            <LeftSideDiv>
                <IntroductionText />
                <DonateButton />
            </LeftSideDiv>
            <IntroductionImage />
            <Line />
        </Container>
    );
}

export default Hero;
