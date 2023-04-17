import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const ForgetContainer = styled.div`
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
        width: 1170px;
    }
    /* Large */
    @media (min-width: 1500px) {
        width: 1500px;
    }
`;

export const ForgetSection = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 991px) {
        height: auto;
        flex-direction: column-reverse;
    }
`;

export const TextContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ImageForget = styled(Image)`
    max-width: 100%;
`;
export const ForgetHeading = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: #000000;
    margin: 0;
`;
export const Forgetform = styled.form`
    width: 100%;
`;
export const ForgetText = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    width: 450px;
    text-align: center;
`;
export const ForgetInput = styled.input`
    width: 500px;
    max-width: 100%;
    padding: 15px 20px;
    margin-bottom: 25px;
    border-radius: 15px;
    border: 2px solid #33956d;
    outline: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &::placeholder {
        font-size: 18px;
        color: #cacaca;
        line-height: 0;
    }
    &:active {
        border: 1px solid #2bdf97;
    }
`;
export const BtnResetPass = styled.button`
    font-size: 20px;

    font-weight: 400;
    color: #fff;
    background-color: #33956d;
    padding: 10px 0;
    border-radius: 20px;
    cursor: pointer;
    width: 400px;
    max-width: 100%;
    border: none;
    font-size: 16px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const BackToLogin = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #888c95;
`;
export const LoginReturn = styled(Link)`
    color: #33956d;
    font-size: 16px;
    font-weight: 400;
`;
export const ImgContent = styled.div`
    flex: 1;
`;
export const ForgetImage = styled(Image)`
    width: 100%;
`;
