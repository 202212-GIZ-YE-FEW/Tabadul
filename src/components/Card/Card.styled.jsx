import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const CardLink = styled(Link)`
    text-decoration: none;
`;

export const ProductCard = styled.div`
    /* background-color: red; */
    width: 275px;
    height: 450px;
    background: #ffffff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    /* background: #ffffff; */
    margin: 10px;
    padding: 4px 4px 0 4px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
`;

export const CardImage = styled(Image)`
    object-fit: cover;
    object-position: center top;
    border-radius: 19px 19px 0px 0px;
    width: 100%;
    height: 244px;
`;

export const ProductDetails = styled.div`
    padding: 0 13px 0 13px;
    /* height: 100%; */
`;

export const ProductTitle = styled.p`
    font-weight: 600;
    font-size: 19px;
    color: #3c4347;
    margin: 0 0 0px 10px;
    word-wrap: break-word;
`;

export const LocationCategoryDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 10px;
    padding: 9px 0px 2px 10px;
`;

export const Cardinfo = styled.div`
    display: flex;
    align-items: center;
`;
export const ItemIcon = styled(Image)`
    /* margin-left: 5px; */
`;

export const IconsTitles = styled.p`
    font-size: 16px;
    line-height: 30px;
    color: #3c4347;
    margin: 0 5px 0 7px;
`;
export const DateAndTime = styled.p`
    /* padding: 0 0 0 12px; */
    margin: 0 0 10px 12px;
    color: #8b8b8b;
    font-size: 13px;
`;

export const CardDescription = styled.p`
    border-top: 0.5px solid #d5dde1;
    padding-top: 18px;
    // font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    width: 200px;
    color: #3c4347;
    margin-left: 10px;
    margin-top: 0;
    word-wrap: break-word;
`;
