import styled from "@emotion/styled";
import Image from "next/image";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 102px;
    @media screen and (max-width: 1400px) {
        flex-direction: column;
        gap: 60px;
    }
`;

export const ImageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProfileImg = styled(Image)`
    max-width: 100%;
    margin-bottom: 21px;
`;

export const Text = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    margin: 8px;
`;

export const UserInfo = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    background: #f5f5f5;
    border-radius: 20px;
    height: 161px;
    width: 1242px;
    max-width: 100%;
    /* gap: 10px; */
    @media screen and (max-width: 991px) {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 27px 0 31px;
    }
    @media screen and (max-width: 768px) {
        padding: 38px 0 0px 31px;
    }
`;

export const Button = styled.button`
    background: #e8e8e8;
    border-radius: 0px 20px 20px 0px;
    border: none;
    width: 81px;

    @media screen and (max-width: 768px) {
        background: #f5f5f5;
        position: absolute;
        top: 15px;
        right: -2px;
    }
`;
export const PenImage = styled(Image)`
    @media screen and (max-width: 768px) {
        height: 29px;
        width: 28px;
    }
`;
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 364px;
    height: 68px;
    &:not(:last-child) {
        padding: 20px 10px 20px 10px;
    }
    @media screen and (max-width: 991px) {
        justify-content: space-between;
        align-items: left;
        height: 100%;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        background: #f5f5f5;
        &:not(:last-child) {
            padding: 0;
            padding-bottom: 23px;
        }
        & > span {
            font-size: 20px;
            font-weight: 400;
            line-height: 20px;
            &:first-of-type {
                padding-bottom: 23px;
            }
        }
    }
    @media screen and (max-width: 320px) {
        & > span {
            font-size: 18px;
        }
    }
`;
