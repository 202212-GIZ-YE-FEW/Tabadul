import styled from "@emotion/styled";

export const UpdateContainer = styled.h2`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    height: 100vh;
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
export const InnerUpdateContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Updateform = styled.form`
    width: 100%;
`;
export const ForgetErorrs = styled.span`
    font-size: 13px;
    font-weight: 800;
    color: #ff00009b;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    place-content: center;
`;
export const UpdateHeading = styled.h2`
    font-size: 32px;
    font-weight: 800;
    text-align: center;
    margin: 0;
    padding: 0;
`;
export const UpdateInput = styled.input`
    display: block;
    width: 50%;
    padding: 15px 20px;
    margin-bottom: 25px;
    border-radius: 15px;
    border: 2px solid #33956d;
    outline: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 0;
    font-size: 16px;
    margin: 70px auto;
    transition: border 0.3s;
    &::placeholder {
        font-size: 18px;
        color: #cacaca;
        line-height: 0;
    }
    &:focus {
        border: none;
        transition: all 0.3s;
    }
    @media screen and (max-width: 768px) {
        padding: 10px 15px;
        width: 90%;
    }
`;

export const UpdateBtnContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
`;

export const UpdateBtn = styled.button`
    display: block;
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
