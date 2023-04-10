import styled from "@emotion/styled";
// import Image from "next/image";
import Image from "next/image";

export const Blogcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 100px;
    @media screen and (max-width: 768px) {
        padding: 60px 70px;
    }
    @media screen and (max-width: 450px) {
        padding: 60px 40px;
    }
`;

export const Blogimg = styled(Image)`
    width: 1188px;
    height: 645px;
    border-radius: 20px;
    text-align: center;
    max-width: 100%;
    @media (min-width: 992px) and (max-width: 1500px) {
        height: 450px;
        width: 950px;
    }
    @media screen and (max-width: 768px) {
        height: auto;
        text-align: center;
    }
`;

export const Blogtitle = styled.h6`
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #3c4347;
    @media screen and (max-width: 1130px) {
        font-size: 24px;
    }
    @media screen and (max-width: 576px) {
        font-size: 18px;
        line-height: 36px;
        margin: 40px 0;
    }
`;

export const Blogdec = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: justify;
    color: #000000;
    margin-top: 0;
    width: 1529px;
    max-width: 100%;
    @media screen and (max-width: 1130px) {
        font-size: 16px;
    }
    @media screen and (max-width: 576px) {
        font-size: 14px;
    }
`;
