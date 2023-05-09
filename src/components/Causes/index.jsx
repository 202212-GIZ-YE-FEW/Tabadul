import Image from "next/image";
import { useTranslation, withTranslation } from "next-i18next";
import React from "react";

import {
    CausesContainer,
    CausesWord,
    Paragraph,
    SingleCause,
    ThreeCausesDiv,
    Title,
} from "./causes.styled";

const Causes = () => {
    const { t } = useTranslation("causes");
    function translateMe(word) {
        return t(word);
    }
    return (
        <CausesContainer>
            <CausesWord> {translateMe("Causes")}</CausesWord>
            <ThreeCausesDiv>
                <SingleCause data-aos='fade-right'>
                    <Image
                        src='/Causes/causes1.svg'
                        width={100}
                        height={100}
                        alt='pic'
                    />
                    <Title>{t("sustainability")}</Title>
                    <Paragraph>{t("sustainabilityartical")}</Paragraph>
                </SingleCause>
                <SingleCause>
                    <Image
                        src='/Causes/causes2.svg'
                        width={100}
                        height={100}
                        alt='pic'
                    />
                    <Title>{t("cooperation")}</Title>
                    <Paragraph>{t("cooperationartical")}</Paragraph>
                </SingleCause>
                <SingleCause data-aos='fade-left'>
                    <Image
                        src='/Causes/causes3.svg'
                        width={100}
                        height={100}
                        alt='pic'
                    />
                    <Title>{t("giving")}</Title>
                    <Paragraph>{t("givingartical")}</Paragraph>
                </SingleCause>
            </ThreeCausesDiv>
        </CausesContainer>
    );
};

export default Causes;
