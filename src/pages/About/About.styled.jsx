import styled from "@emotion/styled";
import Image from "next/image";

export const AboutSection = styled.div`
    background-color: #fff;
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
export const HeroSection = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 991px) {
        height: auto;
        flex-direction: column-reverse;
    }
`;
export const TextContent = styled.div`
    flex: 1;
`;
export const ImgContent = styled.div`
    flex: 1;
`;
export const AboutImg = styled(Image)`
    max-width: 100%;
    @media screen and (max-width: 768px) {
        height: 300px;
    }
`;
export const HeadingContent = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
    color: #3c4347;
    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 20px;
        text-align: center;
    }
`;
export const ParagrhContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    width: 720px;
    color: #3c4347;
    @media (min-width: 1200px) and (max-width: 1500px) {
        width: 500px;
        font-size: 20px;
        line-height: 30px;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        width: fit-content;
    }
    @media screen and (max-width: 768px) {
        width: fit-content;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
    }
`;

export const TeamSection = styled.div`
    padding-top: 75px;
    padding-bottom: 75px;
    @media screen and (max-width: 768px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`;
export const TeamHeading = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #3c4347;
    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 20px;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 700;
    }
`;
export const TeamMemberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 45px;
`;
