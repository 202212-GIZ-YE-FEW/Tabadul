import { useTranslation, withTranslation } from "next-i18next";

import { HeroText, HeroTextContainer } from "./hero.style";

const IntroductionText = () => {
    const { t } = useTranslation("hero");
    function translateMe(word) {
        return t(word);
    }
    return (
        <HeroTextContainer>
            <HeroText>{translateMe("herosectiontext")}</HeroText>
        </HeroTextContainer>
    );
};

export default IntroductionText;
