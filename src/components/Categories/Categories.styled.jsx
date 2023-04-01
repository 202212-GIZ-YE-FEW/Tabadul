import styled from "@emotion/styled";
import Image from "next/image";

export const ContainerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 40px;
    @media (min-width: 768px) and (max-width: 1400px) {
        column-gap: 28px;
        row-gap: 40px;
    }
`;
export const CategoryImge = styled(Image)`
    max-width: 100%;
    @media screen and (max-width: 768px) {
        width: 40.95px;
        height: 39.88px;
    }
`;
export const ContainerCategories = styled.div`
    width: 236px;
    height: 260px;
    background-color: #fff;
    box-shadow: 1px 0px 59px 4px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    @media (min-width: 768px) and (max-width: 1400px) {
        width: 200px;
        height: 236px;
    }
    @media screen and (max-width: 768px) {
        width: 112px;
        height: 121.88px;
        box-shadow: 0px 0px 35px 5px rgba(0, 0, 0, 0.08);
        border-radius: 10px;
    }
`;

export const CategoryParagraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    width: 200px;
    text-align: center;
    color: #3c4347;
    @media (min-width: 768px) and (max-width: 1400px) {
        font-size: 24px;
        width: fit-content;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
        max-width: 100%;
        padding-bottom: 0;
        margin-bottom: 0;
    }
`;
