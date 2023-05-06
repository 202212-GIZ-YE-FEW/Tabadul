import Image from "next/image";
import { useTranslation, withTranslation } from "next-i18next";
import React from "react";

import {
    IntroPhoto,
    StaticInnerImage,
    Statistic,
    StatisticHeading,
    StatisticParagraph,
    StatisticsContainer,
    StatisticsParant,
} from "./Statistics.style";
import StatisticImagetThired from "../../assets/Image/icon_bar_chart.svg";
import StatisticImageSecond from "../../assets/Image/icon_pie_chart.svg";
import StatisticImage from "../../assets/Image/pyramid_chart.svg";
import StatisticsContainerImage from "../../assets/Image/StatisticsContainer.svg";
import StatisticImageFifth from "../../assets/Image/Vector.svg";

function Statistics() {
    const { t } = useTranslation("statistics");
    function translateMe(word) {
        return t(word);
    }
    return (
        <>
            <StatisticsContainer>
                <IntroPhoto
                    src={StatisticsContainerImage}
                    alt='StatisticsContainerImage'
                    width={1006.7}
                    height={464.69}
                    priority={true}
                />
            </StatisticsContainer>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <StatisticsParant>
                    <Statistic>
                        <StaticInnerImage
                            src={StatisticImage}
                            alt='StatisticImage'
                            width={78.24}
                            height={78.24}
                        />
                        <StatisticHeading>1/3</StatisticHeading>
                        <StatisticParagraph>{t("p1")}</StatisticParagraph>
                    </Statistic>
                    <Statistic>
                        <Image
                            src={StatisticImageSecond}
                            alt='StatisticImage'
                            width={78.24}
                            height={78.24}
                        />
                        <StatisticHeading>75%</StatisticHeading>
                        <StatisticParagraph>{t("p2")}</StatisticParagraph>
                    </Statistic>
                    <Statistic>
                        <Image
                            src={StatisticImagetThired}
                            alt='StatisticImage'
                            width={78.24}
                            height={78.24}
                        />
                        <StatisticHeading>312</StatisticHeading>
                        <StatisticParagraph>{t("p3")}</StatisticParagraph>
                    </Statistic>
                    <Statistic>
                        <Image
                            src={StatisticImageFifth}
                            alt='StatisticImage'
                            width={78.24}
                            height={78.24}
                        />
                        <StatisticHeading>{t("fact")}</StatisticHeading>
                        <StatisticParagraph>{t("p4")}</StatisticParagraph>
                    </Statistic>
                </StatisticsParant>
            </div>
        </>
    );
}

export default Statistics;
