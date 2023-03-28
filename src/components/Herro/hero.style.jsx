import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f1f1f1;

    @media screen and (max-width: 1400px) {
        flex-direction: column;
    }
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
    flex: 1;
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
