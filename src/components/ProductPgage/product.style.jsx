import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;

    @media screen and (max-width: 1400px) {
        flex-direction: column;
    }
`;

export const StyledProduct = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8rem 10%;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        margin: 2rem 10%;
    }
`;

export const ProductImages = styled.div`
    width: 50%;
    position: relative;
    object-fit: contain;

    img {
        max-width: 100%;
        max-height: 800px;
        height: auto;
        border-radius: 10px;
        object-fit: contain;

        &.active {
            opacity: 1;
            box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
            transition: box-shadow 0.3s ease-in-out;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 2rem;
    }

    .selected {
        opacity: 100;
    }
`;

export const ImageList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;

    justify-content: center;

    li {
        margin-right: 10px;
        cursor: pointer;
        justify-content: center;
        padding-top: 10px;
    }

    li:last-child {
        margin-right: 0;
    }

    img {
        width: 80px;
        height: 60px;
    }

    .selected {
        opacity: 1;
    }
`;

export const LeftArrow = styled.div`
    cursor: pointer;
    position: absolute;
    top: 30%;
    left: 5px;
    transform: translateY(-50%);
    width: 40px;
    height: 10px;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const RightArrow = styled.div`
    cursor: pointer;
    position: absolute;
    top: 30%;
    right: 5px;
    transform: translateY(-50%);
    width: 40px;
    height: 10px;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const ProductDetails = styled.div`
    width: 45%;
    align-self: flex-start;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: 2rem;
    }
`;

export const LocationWrapper = styled.div`
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-weight: bold;
`;

export const LocationLogo = styled.img`
    height: 30px;
    margin-right: 10px;
`;

export const ItemLocation = styled.p`
    font-size: 16px;
`;

export const InfoLogo = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const ContactInfo = styled.div`
    font-size: 18px;
    margin-top: 10px;
`;

export const ImageListItem = styled.li`
    img {
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
        opacity: ${(props) => (props.active ? "1" : "0.4")};
        &.selected {
            box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
            transition: box-shadow 0.3s ease-in-out;
        }
        &:hover {
            box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
            transition: box-shadow 0.3s ease-in-out;
        }
    }
`;
export const RelatedItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`;

export const RelatedItemCard = styled.div`
    width: 250px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
`;

export const RelatedItemImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
`;

export const RelatedItemDetails = styled.div`
    padding: 10px;
`;

export const RelatedItemTitle = styled.h3`
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: #000000;
`;

export const RelatedItemLocation = styled.p`
    margin: 5px 0 0 0;
    font-size: 0.9rem;
    text-decoration: none;
    color: #555;
`;

export const RelatedItemDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
`;

export const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    text-align: center;
    color: #000000;
    width: 100%;
`;
