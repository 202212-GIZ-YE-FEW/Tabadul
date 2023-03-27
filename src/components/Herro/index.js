import styles from "../../styles/hero.module.css";

import DonateButton from "./DonateButton";
import IntroductionImage from "./IntroductionImage";
import IntroductionText from "./IntroductionText";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles["inner-container"]}>
                <IntroductionText className={styles.introductionText} />
                <DonateButton className={styles.button} />
            </div>
            <IntroductionImage className={styles.image} />
            <hr className={styles.line} />
        </div>
    );
};

export default Hero;
