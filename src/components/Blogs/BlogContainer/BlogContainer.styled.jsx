import styled from "@emotion/styled";

export const Header = styled.h1`
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 84px;
    color: #3c4347;
    margin-bottom: 90px;
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-bottom: 90px;
`;
