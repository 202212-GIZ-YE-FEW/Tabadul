import styled from "@emotion/styled";
import Image from "next/image";

export const TeamCard = styled.div`
    margin: auto;
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;
export const TeamImg = styled(Image)`
    max-width: 100%;
    border-radius: 50%;
    object-fit: contain;
    @media (min-width: 1200px) and (max-width: 1500px) {
        width: 250px;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        width: fit-content;
    }
    @media screen and (max-width: 768px) {
        width: 118px;
        height: 118px;
    }
`;
export const TeamTitle = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    @media (min-width: 1200px) and (max-width: 1500px) {
        font-size: 20px;
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        font-size: 18px;
    }
    @media screen and (max-width: 992px) {
        font-size: 20px;
        line-height: 20px;
        text-align: center;
    }
`;
export const TeamDesc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    width: 200px;
    margin: auto;
    @media (min-width: 1200px) and (max-width: 1500px) {
        font-size: 18px;
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        font-size: 18px;
    }
    @media screen and (max-width: 992px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
        text-align: center;
    }
`;
