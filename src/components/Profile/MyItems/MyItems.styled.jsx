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
`;

export const ItemImage = styled(Image)`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 50px;
    padding: 5px;
`;

export const Text = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    display: flex;
    align-items: center;
`;

export const Icon = styled(Image)`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    margin: 35px;
`;
