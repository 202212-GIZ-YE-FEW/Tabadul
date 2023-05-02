import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
        width: 750px;
    }
    /* Medium */
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1370px;
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 85px 18px;
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
export const InputContainer = styled.form`
    position: relative;
    width: 516px;
    height: 54px;
    margin: auto auto 50px auto;
    @media screen and (max-width: 786px) {
        width: 350px;
        max-width: 100%;
        height: 42px;
    }
`;

export const SerachBar = styled.input`
    width: 100%;
    height: 100%;
    display: block;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
    border-radius: 69px;
    border: none;
    margin-bottom: 40px;
    padding-left: 39px;
    font-size: 24px;
    line-height: 36px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #bebebe;
    }
    @media screen and (max-width: 768px) {
        background: #ffffff;
        box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
        border-radius: 69px;
        padding-left: 21.67px;
        font-size: 20px;
        line-height: 30px;
    }
`;
export const SerachBarImage = styled(Image)`
    position: absolute;
    top: 50%;
    right: 15.38px;
    transform: translateY(-50%);
    width: 32.21px;
    height: 32.84px;
    z-index: 99;
    @media screen and (max-width: 768px) {
        width: 32px;
    }
`;
