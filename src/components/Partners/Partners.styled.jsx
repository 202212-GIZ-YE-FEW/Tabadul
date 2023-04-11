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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 152.5px;
    gap: 180px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
`;

export const PartnerImage = styled(Image)`
    display: flex;
    justify-contnet: center;
    align-items: center;
`;
