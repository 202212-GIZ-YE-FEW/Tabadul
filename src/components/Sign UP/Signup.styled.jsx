import styled from "@emotion/styled";
import Image from "next/image";

export const SignContainer = styled.div``;

export const SignHeader = styled.h2`
    font-weight: 700;
    font-size: 36px;
    color: #3c4347;
    text-align: center;
    @media screen and (max-width: 1130px) {
        font-size: 24px;
    }
`;

export const SignForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormSign = styled.form``;

export const Signdev = styled.div`
    padding: 20px;
    margin-top: 10px;
`;

export const SignTitle = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 20px;
    padding: 10px;
    @media screen and (max-width: 1130px) {
        font-size: 20px;
    }
`;

export const SignInput = styled.input`
    width: 1102px;
    height: 66.78px;
    top: 58.22px;
    background: #fdfdfd;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-size: 20px;
    &::placeholder {
        font-weight: 400;
        font-size: 20px;
        padding-left: 20px;
        color: #bbbbbb;
    }
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    @media screen and (max-width: 1130px) {
        width: 364px;
        height: 58.77px;
    }
`;

export const LocationSelect = styled.select`
    width: 1102px;
    height: 66.78px;
    top: 58.22px;
    background: #fdfdfd;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
    color: #bbbbbb;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("./images/Arrow.svg");
    background-repeat: no-repeat;
    background-position: right 20px center;
    @media screen and (max-width: 1130px) {
        width: 364px;
        height: 58.77px;
    }
`;

export const Selectoption = styled.option``;

export const InfoDev = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SignButton = styled.button`
    background: #33956d;
    border-radius: 20px;
    width: 288px;
    height: 53px;
    text-align: center;
    text-color: #ffffff;
    @media screen and (max-width: 1130px) {
        width: 222px;
        height: 52.77px;
    }
`;

export const Signspan = styled.span`
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: 1130px) {
        font-size: 20px;
    }
`;

export const Signwith = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    text-transform: capitalize;
    color: #3c4347;
    margin-top: 80px;
    @media screen and (max-width: 1130px) {
        font-size: 20px;
    }
`;
export const Imgdev = styled.div`
    display: flex;
`;

export const FaceBook = styled(Image)`
    padding: 10px;
    bottom: 0;
`;

export const Instagram = styled(Image)`
    padding: 10px;
    bottom: 0;
`;

export const Linedin = styled(Image)`
    padding: 10px;
    bottom: 0;
`;
