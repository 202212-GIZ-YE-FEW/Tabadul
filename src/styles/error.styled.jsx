import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
export const ErrorSection = styled.div`
    background-color: #fff;
    position: relative;
`;
export const ErorrContainer = styled.div`
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
export const ErorrBox = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        height: auto;
    }
    @media screen and (max-width: 768px) {
        height: 100vh;
    }
`;

export const TextContent = styled.div`
    flex: 1;
    position: relative;
    @media screen and (max-width: 768px) {
        padding-top: 100px;
    }
    @media screen and (max-width: 374px) {
        padding-top: 20px;
    }
`;
export const ErrorHeading = styled.h3`
    position: relative;
    font-style: bold;
    font-weight: 700;
    font-size: 92px;
    line-height: 54px;
    margin-bottom: 48px;
    color: #3c4347;
    @media screen and (max-width: 768px) {
        font-size: 72px;
        line-height: 20px;
        text-align: center;
    }
    @media screen and (max-width: 450px) {
        font-size: 52px;
        line-height: 20px;
        text-align: center;
    }
`;
export const Line = styled(Image)`
    position: absolute;
    top: 45px;
    left: -30px;
    @media screen and (max-width: 768px) {
        top: 100px;
        left: 30px;
    }
    @media screen and (max-width: 374px) {
        top: 25px;
        left: 0px;
    }
`;
export const Errorparghrah = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 49px;
    color: #160b38;
    width: 450px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 39px;
        text-align: center;
    }
    @media screen and (max-width: 450px) {
        width: fit-content;
        font-size: 22px;
    }
`;
export const ImgContent = styled.div`
    flex: 1;
`;
export const ErrorImg = styled(Image)`
    max-width: 100%;
    @media (min-width: 1200px) and (max-width: 1500px) {
        height: 600px;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        width: 500px;
        height: 700px;
    }
    @media screen and (max-width: 768px) {
        height: 300px;
    }
    @media screen and (max-width: 374px) {
        height: 270px;
    }
`;
export const BackHome = styled(Link)`
    width: 200px;
    height: 70px;
    color: #fff;
    font-size: 20px;
    background-color: #33956d;
    display: block;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 700;
    border-radius: 20px 20px 5px 20px;
    @media screen and (max-width: 991px) {
        margin: auto;
    }
    @media screen and (max-width: 768px) {
        width: 180px;
        height: 60px;
    }
`;
