import styled from "@emotion/styled";
import Image from "next/image";

export const SigninContainer = styled.div`
    // @media screen and (max-width: 600px) {
    //  margin-left:100px;
    // }
`;

export const Itemscontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Inputscontainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 0;
    max-width: 100%;
`;

export const Signinheader = styled.h1`
    width: 206px;
    height: 31px;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #3c4347;
    margin-left: 180px;
    display: none;
    @media screen and (max-width: 600px) {
        width: 99px;
        height: 26px;
        font-size: 24px;
        margin-left: 300px;
    }
`;

export const Signinform = styled.form`
    width: 500px;
    max-width: 100%;
    padding: 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Containerinput = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Itemsdev = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 10px;
    width: 100%;
`;
export const Test = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Signintitle = styled.label`
    /* width: 55px; */
    height: 30px;
    left: 50px;
    top: 59px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin-left: 20px;
`;
export const Signininput = styled.input`
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    border: 2px solid #33956d;
    border-radius: 15px;
    font-size: 20px;
    margin-top: 10px;
    outline: none;
    padding: 10px 20px;
    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #cacaca;
    }
    &.input-error {
        border: 2px solid #ff00009b;
    }
`;

export const Checklabel = styled.label`
    display: inline-block;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #888c95;
    margin-right: 250px;
    @media screen and (max-width: 600px) {
        margin-right: 0;
    }
`;
export const Checkinput = styled.input`
    box-sizing: border-box;
    width: 19px;
    height: 19px;
    left: 46px;
    top: 276px;
    border: 1px solid #4e5769;
    border-radius: 6px;
`;

export const Signinbutton = styled.button`
    display: inline-block;
    width: 100%;
    max-width: 100%;
    background: #33956d;
    border-radius: 20px;
    margin-top: 40px;
    border: none;
    padding: 7px 0;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #267548;
    }
    @media screen and (max-width: 768px) {
        width: 280px;
    }
`;
export const Buttonspan = styled.span`
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

export const Paraghraph = styled.p`
    width: 327px;
    height: 28px;
    max-width: 100%;
    left: 123px;
    top: 403px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #888c95;
    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;
export const Linkparagraph = styled.a`
    width: 327px;
    height: 28px;
    max-width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #4e5769;
    margin-left: 10px;
    margin: 0 5px 0 5px;
    &:hover {
        color: #33956d;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
        margin-left: 5px;
    }
`;

export const ChangePass = styled.a`
    width: 327px;
    height: 28px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-decoration-line: underline;
    color: #4e5769;
    &:hover {
        color: #33956d;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;
export const ParaghraphConatainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

export const Signinwith = styled.p`
    width: 156px;
    height: 31px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #3c4347;
`;
export const Imgsdev = styled.div`
    display: flex;
`;

export const FaceBookImg = styled(Image)`
    padding: 10px;
    bottom: 0;
`;

export const InstagramImg = styled(Image)`
    padding: 10px;
    bottom: 0;
`;

export const LinedinImg = styled(Image)`
    padding: 10px;
    bottom: 0;
`;

export const ContainerImg = styled.div`
    @media screen and (max-width: 1300px) {
        display: none;
    }
`;
export const Signinimage = styled(Image)``;
export const Erorrsmsg = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #ff00009b;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    padding-left: 10px;
`;

export const Loadding = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    color: #fff;
    font-size: 20px;
    &:i {
        font-size: 50px;
        margin-right: 10px;
    }
`;
export const Loadinglabel = styled.p``;
