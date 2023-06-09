import styled from "@emotion/styled";
import Image from "next/image";

export const Header = styled.h1`
    text-align: center;
    // font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 84px;
    color: #3c4347;
    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
`;

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Card = styled.div`
    // position: absolute;
    width: 260px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: #ffffff;
`;

export const Cardimg = styled(Image)`
    object-fit: cover;
    object-position: center top;
    border-radius: 19px 19px 0px 0px;
`;

export const Cardinfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

export const Icon = styled(Image)`
    &.icon {
        width: 32px;
        height: 32px;
    }
`;
export const Cardcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const LocationTitle = styled.p`
    // font-family: "Poppins";
    color: #3c4347;
    font-weight: 400;
    font-size: 19px;
    line-height: 10px;
    text-align: center;
    margin: 0 0 0 10px;
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
    word-wrap: break-word;
`;

export const Line = styled.hr`
    // position: absolute;
    // width: 1701px;
    // height: 0px
    // // left: 78px;
    // // top: 3251px;
    // border: 1px solid #33956D;
    // color:background: rgba(51, 149, 109, 1);

    position: relative;
    left: 50%;
    // bottom: 3%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: 0px;
    background-color: #33956d;
    margin-top: 40px;
`;

export const Lo_Ca_Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 10px;
    padding: 13px 0px 14px 1px;
    /* margin: 0 0 14px 0; */
`;
export const ProductTitle = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: #3c4347;
    margin: 0 0 0 10px;
    word-wrap: break-word;
`;
