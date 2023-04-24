import styled from "@emotion/styled";
import Image from "next/image";

export const Pagecontainer = styled.div`
    margin: 0 0 40px 0;
`;
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

export const ItemImageInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px 0 30px 0;
    width: 100%;
`;
export const ImagesDiv = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 30px 10px;
    justify-content: center;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 400px));
`;
export const ItemImage = styled(Image)`
    border-radius: 20px;
    width: 100%;
    height: 300px;
    /* object-position: center top; */
    object-fit: ${(props) =>
        props.alt === "thumbnail" ? "cover" : " contain"};
`;
export const ItemTitle = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 7px;
    padding: 10px;
    @media screen and (max-width: 820px) {
        font-size: 20px;
    }
`;
export const TitleInput = styled.input`
    font-family: inherit;
    border: none;
    width: 800px;
    height: 60.78px;
    top: 58.22px;
    background: #fdfdfd;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-size: 20px;
    padding-left: 20px;
    &::placeholder {
        font-weight: 400;
        font-size: 20px;
        color: #bbbbbb;
    }

    &:focus {
        outline: none !important;
        border: 2px solid #33956d;
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
    margin-left: 7px;
    padding: 10px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const CatogryInput = styled.select`
    border: none;
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
    padding: 10px 10px 10px 20px;
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
    &:focus {
        outline: none !important;
        border: 2px solid #33956d;
    }
`;
export const Selectoption = styled.option``;

export const ItemLocation = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 7px;
    padding: 10px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const LocationInput = styled.select`
    border: none;
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
    padding: 10px 10px 10px 20px;
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
    &:focus {
        outline: none !important;
        border: 2px solid #33956d;
    }
`;

export const Locationoption = styled.option``;

export const ItemDescription = styled.label`
    font-weight: 400;
    font-size: 24px;
    color: #3c4347;
    display: flex;
    align-items: flex-end;
    margin-left: 7px;
    padding: 10px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;
export const DescriptionInput = styled.textarea`
    font-family: inherit;
    border: none;
    width: 800px;
    height: 242.06px;
    top: 60.94px;
    background: #ffffff;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-size: 20px;
    padding-left: 20px;
    padding-top: 15px;
    line-height: 30px;
    &::placeholder {
        font-weight: 400;
        font-size: 20px;
        display: flex;
        align-items: center;
        color: #bbbbbb;
        /* padding-left: 20px;
        padding-top: 10px; */
    }
    &:focus {
        outline: none !important;
        border: 2px solid #33956d;
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
    display: flex;
    flex-direction: column;
    border: none;
    width: 380px;
    height: 100%;
    background: #ffffff;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 10px;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 348px;
        height: 100%;
    }
`;

export const Uploadspan = styled.span`
    font-weight: 400;
    font-size: 20px;
    color: #bbbbbb;
    overflow-wrap: break-word;
    width: 100%;
`;

export const UploadInput = styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    /* border: 2px solid black; */
`;

export const Buttoncontainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const ConfirmButton = styled.button`
    background-color: ${(props) => (props.imagesList ? "#33956d" : "grey")};
    color: ${(props) => (props.imagesList ? "white" : "black")};
    /* background: #33956d; */
    border-radius: 54px;
    border: none;
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

export const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    width: 380px;
    height: 100%;
    background: #ffffff;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 10px;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 348px;
        height: 100%;
    }
`;

export const ErrorLabel = styled.label`
    color: #f07167;
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 17px;
`;
export const LabelDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const PlusDiv = styled.div`
    width: 93%;
    height: 400px;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #6f6f6f;
    position: relative;
`;
export const DeleteIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 15px;
    cursor: pointer;
`;
