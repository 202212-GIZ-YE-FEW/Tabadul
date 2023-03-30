import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        width: 750px;
    }
    /* Medium */
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
    /* Large */
    @media (min-width: 1500px) {
        width: 1400px;
    }
`;

export const BoxCategore = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const BoxCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 40px;
    margin-top: 100px;
`;
export const Cards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Card = styled.div`
    // position: absolute;
    background: #ffffff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: #ffffff;
`;

export const Cardimg = styled(Image)`
    border-radius: 19px 19px 0px 0px;
    max-width: 100%;
`;

export const Cardinfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

export const LocationTitle = styled.p`
    // font-family: "Poppins";
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-left: 10px;
`;

export const CardHeader = styled.p`
    // font-family: "Poppins";
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #3c4347;
    margin-left: 10px;
    margin-top: 0;
`;
export const CardParagraph = styled.p`
    // font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    width: 200px;
    color: #3c4347;
    margin-left: 10px;
    margin-top: 0;
`;
