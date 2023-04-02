import styled from "@emotion/styled";

export const Pagecontainer = styled.div``;
export const ItemHeader = styled.h2`
    font-weight: 700;
    font-size: 36px;
    color: #3c4347;
    text-align: center;
`;
export const Formcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormItem = styled.form``;
export const ItemInput = styled.div`
    padding: 20px;
    margin-top: 10px;
`;

export const ItemTitle = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 20px;
    padding: 10px;
    @media screen and (max-width: 820px) {
        font-size: 20px;
    }
`;
export const TitleInput = styled.input`
    width: 800px;
    height: 60.78px;
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

    @media screen and (max-width: 768px) {
        width: 348px;
        height: 50px;
    }
`;

export const ItemCatogry = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 20px;
    padding: 10px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const CatogryInput = styled.select`
    width: 800px;
    height: 60.78px;
    top: 58.22px;
    background: #fdfdfd;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-weight: 400;
    font-size: 20px;
    font-color: black;
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
    @media screen and (max-width: 768px) {
        width: 348px;
        height: 50px;
    }
`;
export const Selectoption = styled.option``;

export const ItemLocation = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 20px;
    padding: 10px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const LocationInput = styled.select`
    width: 800px;
    height: 60.78px;
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
    @media screen and (max-width: 768px) {
        width: 348px;
        height: 50px;
    }
`;

export const Locationoption = styled.option``;

export const ItemDescription = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 20px;
    padding: 10px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;
export const DescriptionInput = styled.textarea`
    width: 800px;
    height: 242.06px;
    top: 60.94px;
    background: #ffffff;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-size: 20px;
    &::placeholder {
        font-weight: 400;
        font-size: 20px;
        display: flex;
        align-items: center;
        color: #bbbbbb;
        padding-left: 20px;
        padding-top: 10px;
    }
    @media screen and (max-width: 768px) {
        width: 348px;
        height: 151px;
    }
`;

export const Itemupload = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 20px;
    padding: 10px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;
export const UploadContainer = styled.div`
    width: 800px;
    height: 242.06px;
    background: #ffffff;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 10px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 768px) {
        width: 348px;
        height: 110px;
    }
`;

export const Uploadspan = styled.span`
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #bbbbbb;
`;

export const UploadInput = styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
`;

export const Buttoncontainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const ConfirmButton = styled.button`
    background: #33956d;
    border-radius: 54px;
    width: 150px;
    height: 48.77px;
    text-align: center;
    text-color: #ffffff;
    @media screen and (max-width: 768px) {
        width: 117px;
        height: 38;
    }
`;
export const Confirmspan = styled.span`
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const CancelButton = styled.button`
    border: 3px solid #33956d;
    border-radius: 54px;
    width: 150px;
    height: 48.77px;
    background-color: #ffffff;
    @media screen and (max-width: 768px) {
        width: 117px;
        height: 38;
    }
`;
export const Cancelspan = styled.span`
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #33956d;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;
