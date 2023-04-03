import styled from "@emotion/styled";
import Image from "next/image";
export const BlogContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 100px;
    padding-bottom: 100px;
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
        width: 1400px;
    }
`;
export const Blog = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 132px;
    &:nth-child(even) {
        flex-direction: row-reverse;
    }
    @media (min-width: 991px) and (max-width: 1500px) {
        margin-bottom: 40px;
    }
    @media screen and (max-width: 991px) {
        flex-direction: column;
        &:nth-child(even) {
            flex-direction: column;
        }
    }
    @media screen and (max-width: 768px) {
        gap: 0px;
        margin-bottom: 0px;
    }
`;
export const ContentSide = styled.div`
    text-align: left;
    flex: 1;
`;
export const ImageSide = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    text-align: center;
`;
export const BlogImge = styled(Image)`
    max-width: 100%;
    @media screen and (max-width: 360px) {
        height: 280px;
    }
`;
export const BlogHeading = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #000000;
    @media (min-width: 991px) and (max-width: 1500px) {
        font-size: 28px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 24px;
    }
    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 26px;
        margin-bottom: 0;
    }
`;
export const BlogParagraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    width: 657px;
    max-width: 100%;
    margin-top: 0;
    @media (min-width: 991px) and (max-width: 1500px) {
        font-size: 20px;
        width: 550px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 22px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        font-size: 17px;
        line-height: 30px;
        text-align: center;
    }
`;
export const BlogButton = styled.button`
    color: #fff;
    background-color: #33956d;
    border-radius: 82px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    width: 205px;
    height: 49.16px;
    border: none;
    cursor: pointer;
    & a {
        text-decoration: none;
        color: #fff;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 22px;
        width: 180px;
        height: 43px;
    }
    @media screen and (max-width: 768px) {
        margin: auto;
        width: 160px;
        height: 40px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
