import { withTranslation } from "next-i18next";

import { HeroText, HeroTextContainer } from "./hero.style";
const IntroductionText = ({ t }) => {
    return (
        <HeroTextContainer>
            <HeroText>{t("herosectiontext")}</HeroText>
        </HeroTextContainer>
    );
};

export default withTranslation("hero")(IntroductionText);
