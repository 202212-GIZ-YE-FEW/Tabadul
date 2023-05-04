import styled from "@emotion/styled";
import Image from "next/image";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 102px;
`;

export const ImageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProfileImg = styled(Image)`
    max-width: 100%;
    @media screen and (max-width: 768px) {
        height: 300px;
    }
    margin-bottom: 21px;
`;

export const Text = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    margin: 8px;
`;

export const UserInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: #f5f5f5;
    border-radius: 20px;
    height: 161px;
    width: 1242px;
    /* gap: 10px; */
`;

export const Button = styled.button`
    background: #e8e8e8;
    border-radius: 0px 20px 20px 0px;
    border: none;
    width: 81px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 364px;
    height: 68px;
`;
