import styled from "@emotion/styled";
// import Image from "next/image";
import Image from "next/image";

export const Blogcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 80px;
`;

export const Blogimg = styled(Image)`
    width: 1188px;
    height: 645px;
    border-radius: 20px;
    text-align: center;
    @media screen and (max-width: 1130px) {
        width: 476px;
        height: 254px;
    }
    @media screen and (max-width: 530px) {
        height: 550px;
        padding-left: 40px;
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
    @media screen and (max-width: 530px) {
        padding-left: 30px;
        margin-top: 0;
    }
`;

export const Blogdec = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #000000;
    margin-top: 0;
    @media screen and (max-width: 1130px) {
        font-size: 16px;
    }
    @media screen and (max-width: 530px) {
        padding-left: 30px;
    }
`;
