import styled from "@emotion/styled";
import Image from "next/image";

export const StatisticsContainer = styled.div`
    height: 658px;
    background-color: #33956d;
    position: relative;
    z-index: -1;
    display: grid;
    place-items: center;
    font-family: Poppins;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(51 149 109 / 80%);
        z-index: 200;
    }
    @media screen and (max-width: 768px) {
        height: auto;
    }
`;
export const IntroPhoto = styled(Image)`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        height: 280px;
    }
`;
export const StatisticsParant = styled.div`
    position: relative;
    top: -130px;
    width: 90%;
    max-width: 1689px;
    height: auto;
    background-color: #fff;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
    border-radius: 45px;
    margin: auto;
    z-index: 500;
    padding: 30px 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 44px;
    flex-wrap: wrap;
`;

export const Statistic = styled.div`
    text-align: center;
    padding-top: 41px;
    width: 363.31px;
`;

export const StaticInnerImage = styled(Image)`
    @media screen and (max-width: 768px) {
        width: 71.31px;
        height: 62.4px;
    }
`;

export const StatisticHeading = styled.h2`
    font-size: 30px;
    font-weight: 700;
    color: #4e5769;
    margin-top: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        margin-top: 11px;
        margin-bottom: 11px;
    }
`;
export const StatisticParagraph = styled.p`
    font-size: 24px;
    color: #000000;
    line-height: 36px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 20px;
        line-height: 30px;
    }
    @media screen and (max-width: 1400px) {
        font-size: 20px;
    }
`;
