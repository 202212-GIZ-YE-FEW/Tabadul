import styles from "../../styles/hero.module.css";

import DonateButton from "./DonateButton";
import IntroductionImage from "./IntroductionImage";
import IntroductionText from "./IntroductionText";

const HeroContainer = ({ children }) => {
    return <div style={{ backgroundColor: "#f1f1f1" }}>{children}</div>;
};

const Hero = () => {
    return (
        <HeroContainer>
            <div className={styles.container}>
                <div className={styles["inner-container"]}>
                    <IntroductionText />
                    <DonateButton />
                </div>
                <IntroductionImage />
                <hr className={styles.line} />
            </div>
        </HeroContainer>
    );
};

export default Hero;
