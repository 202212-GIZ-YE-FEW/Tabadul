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
    flex-direction: row-reverse;
`;

export const TextContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
`;
export const ImageForget = styled(Image)`
    max-width: 100%;
    @media screen and (max-width: 768px) {
        width: 150px;
    }
`;
export const ForgetHeading = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: #000000;
    margin: 0;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;
export const Forgetform = styled.form`
    width: 500px;
    max-width: 100%;
    padding: 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
export const ForgetText = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    width: 450px;
    max-width: 100%;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        font-size: 16px;
    }
`;
export const ForgetInput = styled.input`
    display: inline-block;
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 25px;
    border-radius: 15px;
    border: 2px solid #33956d;
    outline: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 0;
    font-size: 16px;
    &.input-error {
        border: 2px solid #ff00009b;
    }
    &::placeholder {
        font-size: 18px;
        color: #cacaca;
        line-height: 0;
    }
    @media screen and (max-width: 768px) {
        padding: 10px 15px;
    }
`;
export const BtnResetPass = styled.button`
    display: inline-block;
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
    margin-top: 20px;
    &:disabled {
        opacity: 0.35;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
        padding: 8px 0;
    }
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
    @media screen and (max-width: 991px) {
        display: none;
    }
`;
export const ForgetImage = styled(Image)`
    width: 100%;
    max-width: 100%;
`;
export const ForgetErorrs = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #ff00009b;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    padding-left: 10px;
`;
