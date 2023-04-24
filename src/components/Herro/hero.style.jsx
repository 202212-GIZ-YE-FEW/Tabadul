import styled from "@emotion/styled";
import Image from "next/image";

export const HeroSection = styled.div`
    background-color: #f1f1f1;
    height: calc(100vh - 50px);
    @media screen and (max-width: 992px) {
        height: auto;
    }
`;
export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
        width: 750px;
    }
    /* Medium */
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
    /* Large */
    @media (min-width: 1500px) {
        width: 1500px;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 120px;
    padding-top: 104px;
    @media (min-width: 1200px) and (max-width: 1500px) {
        margin-bottom: 40px;
        padding-top: 40px;
    }
    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        padding-top: 0px;
        margin-bottom: 0px;
    }
`;
export const HeroTextContainer = styled.div`
    width: 618px;
    @media (min-width: 1200px) and (max-width: 1500px) {
        width: 518px;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        width: fit-content;
    }
    @media screen and (max-width: 768px) {
        width: fit-content;
    }
`;
export const HeroText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: #000000;
    text-align: left;
    @media (min-width: 1200px) and (max-width: 1500px) {
        width: 470px;
        font-size: 24px;
        line-height: 44px;
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        font-size: 28px;
        line-height: 36px;
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        font-size: 22px;
        line-height: 36px;
        text-align: center;
        padding: 5px 30px;
    }
`;
export const HeroButton = styled.button`
    background-color: #33956d;
    color: white;
    width: 292px;
    height: 94px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    border-radius: 54px;
    margin-left: 100px;
    margin-top: 30px;
    &:hover {
        background-color: #267548;
    }
    @media screen and (max-width: 1500px) {
        width: 190px;
        height: 60px;
        font-size: 24px;
        margin-left: 60px;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
    @media screen and (max-width: 768px) {
        font-size: 24px;
        width: 184px;
        height: 59px;
        margin-left: 0px;
        margin-top: 50px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const IntroImage = styled(Image)`
    width: 780px;
    height: 629px;
    max-width: 100%;
    object-fit: contain;
    @media (min-width: 1200px) and (max-width: 1500px) {
        width: 500px;
        height: 500px;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        width: 500px;
        height: 500px;
    }
    @media screen and (max-width: 768px) {
        width: 336px;
        height: 336px;
    }
    @media screen and (max-width: 375px) {
        width: 280px;
        height: 280px;
    }
`;

export const LeftSideDiv = styled.div`
    flex: 1;
`;

export const Line = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: #33956d;
    bottom: 50%;
    margin-bottom: 20px;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;
