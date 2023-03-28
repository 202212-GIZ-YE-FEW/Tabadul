import styled from "@emotion/styled";
import Image from "next/image";

export const HeroSection = styled.div`
    background-color: #f1f1f1;
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

    /* Large */
    @media (min-width: 1200px) {
        width: 1170px;
    }
    @media screen and (max-width: 1400px) {
        flex-direction: column;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const HeroButton = styled.button`
    background-color: #33956d;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin: 30px 30px;

    &:hover {
        background-color: #267548;
    }
`;

export const IntroImage = styled(Image)`
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        padding: 0px 0px;
    }
`;

export const LeftSideDiv = styled.div`
    text-align: left;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    flex: 1;
    margin-top: auto;
`;

export const Line = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    height: 2px;
    background-color: #33956d;
    bottom: 50%;
    margin-bottom: 20px;
`;
