import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const ListedItemsDiv = styled.div`
    width: 100%;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SearchAndFilterDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 5px 5%;
    justify-content: center;
`;

export const SearchDiv = styled.div`
    width: 516px;
    display: flex;
    background-color: red;
    position: relative;
    margin: 20px 0 20px 0;
    padding-inline-start: 39px;
    padding-inline-end: 39px;
    background-color: red;
    color: #1a4b38;
    display: flex;
    justify-content: space-between;
    height: 54px;
    border: none;
    background: #ffffff;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
    border-radius: 69px;
    transition: ease all 0.5s;

    @media screen and (max-width: 1024px) {
        margin: 20px 2vw 20px 2vw;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    font-size: 24px;
    &:focus-visible {
        outline: none;
        border: 2px solid #33956d;
    }
    @media screen and (max-width: 600px) {
        &::placeholder {
            font-size: 18px;
        }
    }
`;

export const SearchIcon = styled(Image)`
    color: #5a5a5a;
    height: 100%;
    @media screen and (max-width: 600px) {
        width: 20px;
    }
`;

export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 6px;
    gap: 52px;
    margin: 20px;
`;

export const FilterButton = styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 21px;
    font-weight: 700;
    height: 56px;
    background-color: #33956d;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: ease all 0.5s;
    gap: 20px;

    @media screen and (max-width: 600px) {
        font-size: 15px;
    }
    @media screen and (max-width: 1000px) {
        font-size: 17px;
    }
`;

export const MenuList = styled.ul`
    background-color: white;
    position: absolute;
    list-style-type: none;
    top: 46px;
    right: 0px;
    padding-left: 0;
    padding-right: 0;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`;
export const MenuItemDiv = styled.div`
    text-align: start;
    margin-right: 20px;
    margin-left: 20px;
    border-bottom: 1px solid #dfe0e0;
    padding: 15px 3px 15px 3px;
`;

export const MenuItem = styled.li`
    text-align: left;
    color: #33956d;
    font-weight: 400;

    &:last-child div {
        border-style: none;
    }
    &:hover {
        background-color: #33956d;
        color: white;
    }

    &:first-of-type:hover {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    &:last-of-type:hover {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
`;

export const InnerDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 17px 0 17px;
    height: 100%;
    width: 100%;
    gap: 10px;
`;

export const GreenButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const ButtonDetailDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const ButtonName = styled.div`
    display: flex;
    place-items: center;
`;
export const ButtonIcon = styled(Image)`
    margin: 5px 10px 0 10px;

    @media screen and (max-width: 600px) {
        width: 17px;
    }
`;
export const AddItem = styled.button`
    font-size: 24px;
    font-weight: 700;
    height: 56px;
    color: #f07167;
    background-color: transparent;
    padding: 12px 24px;
    border: 1px solid #f07167;
    border-radius: 20px;
    cursor: pointer;
    transition: ease all 0.5s;

    @media screen and (max-width: 600px) {
        font-size: 15px;
    }
    @media screen and (max-width: 1000px) {
        font-size: 17px;
    }
`;

export const ItemsListDiv = styled.div`
    margin: 120px 0 80px 0;
    max-width: 1650px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 43px 50px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 275px);
`;

export const CardImage = styled(Image)`
    object-fit: cover;
    object-position: center top;
    border-radius: 19px 19px 0px 0px;
    width: 100%;
    height: 244px;
`;

export const ItemCard = styled.div`
    /* background-color: red; */
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    /* background: #ffffff; */
    margin: 10px;
    padding: 4px 4px 0 4px;
`;

export const ProductDetail = styled.div`
    padding: 0 13px 0 13px;
    /* height: 100%; */
`;

export const ItemIcon = styled(Image)`
    /* margin-left: 5px; */
`;

export const Cardinfo = styled.div`
    display: flex;
    align-items: center;
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
export const ItemTitle = styled.p`
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
export const CardLink = styled(Link)`
    text-decoration: none;
`;

export const ShimmerContainer = styled.div`
    width: 80%;
    margin: 100px auto;
`;
