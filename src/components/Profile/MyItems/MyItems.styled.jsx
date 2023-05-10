import styled from "@emotion/styled";
import Image from "next/image";

export const Header = styled.h1`
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 84px;
    color: #3c4347;
    margin-bottom: 90px;
    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
`;

export const ItemCard = styled.div`
    display: flex;
    flex-direction: row;
    background: #f5f5f5;
    border-radius: 46px;
    width: 1458px;
    height: 104.63px;
    max-width: 100%;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
        height: 100%;
        align-items: center;
        padding: 3px 14px 0px 2px;
        justify-content: space-between;
    }
`;

export const ItemImage = styled(Image)`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 50px;
    padding: 5px;
    @media screen and (max-width: 768px) {
        margin-right: 20px;
        height: 73px;
        width: 48px;
    }
`;

export const Text = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Icon = styled(Image)`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    margin: 35px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        margin: 0px;
        width: 28px;
        height: 29px;
        margin-left: 20px;
    }
`;
export const NoData = styled(Image)`
    margin: 0 auto;
    display: flex;
    place-content: center;
    max-width: 100%;
    @media screen and (max-width: 786px) {
        width: 70%;
    }
`;
