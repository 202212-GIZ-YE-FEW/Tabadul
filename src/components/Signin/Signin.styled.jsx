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
    // items-align: center;
    @media screen and (max-width: 600px) {
        justify-content: end;
    }
`;

export const Inputscontainer = styled.div`
    display: flex;
    flex-direction: column;
    // padding: 110px;
    // // @media screen and (max-width: 600px) {
    //     margin-left: 400px;
    // }
    // @media screen and (max-width: 420px) {
    //     margin-left: 700px;
    // }
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
    // @media screen and (max-width: 600px) {
    //     width: 99px;
    //     height: 26px;
    //     font-size: 24px;
    //     margin-left: 300px;
    // }
`;

export const Signinform = styled.form``;
export const Containerinput = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Itemsdev = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 10px;
`;
export const Test = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Signintitle = styled.label`
    width: 55px;
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
    width: 500px;
    height: 49px;
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
    // @media screen and (max-width: 600px) {
    //     width: 364px;
    //     height: 58.77;
    // }
    &.input-error {
        border: 2px solid #ff00009b;
    }
`;

export const Checklabel = styled.label`
    width: 298px;
    height: 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #888c95;
    margin-right: 300px;
    // @media screen and (max-width: 600px) {
    //     margin-left: 120px;
    // }
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
    width: 502px;
    height: 48px;
    background: #33956d;
    border-radius: 20px;
    margin-top: 40px;
    // @media screen and (max-width: 600px) {
    //     width: 271px;
    //     height: 49px;
    // }
`;
export const Buttonspan = styled.span`
    width: 72px;
    height: 36px;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    // @media screen and (max-width: 600px) {
    //     width: 60px;
    //     height: 30px;
    //     font-size: 20px;
    // }
`;

export const Paraghraph = styled.p`
    width: 327px;
    height: 28px;
    left: 123px;
    top: 403px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #888c95;
    // @media screen and (max-width: 600px) {
    //     font-size: 20px;
    // }
`;
export const Linkparagraph = styled.a`
width: 327px;
height: 28px;
font-weight: 400;
font-size: 16px;
line-height: 20px
text-decoration-line: underline;
color: #4E5769;
// @media screen and (max-width: 600px) {
//     font-size:20px    
// }
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
    // @media screen and (max-width: 600px) {
    //     font-size: 20px;
    // }
`;
export const ParaghraphConatainer = styled.div`
    display: flex;
    flex-direction: column;
    items-align: center;
    padding: 20px;
`;

export const Signinwith = styled.p`
    width: 156px;
    height: 31px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #3c4347;
    // @media screen and (max-width: 600px) {
    //     font-size: 20px;
    // }
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
