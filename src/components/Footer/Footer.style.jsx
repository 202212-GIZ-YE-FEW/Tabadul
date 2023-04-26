import styled from "@emotion/styled";
import Image from "next/image";

export const Footercss = styled.div`
    width: 100%;
    background-color: #33956d;
    color: #fff;
    @media screen and (max-width: 700px) {
        position: relative;
        bottom: 0px;
    }
`;

export const Container = styled.div`
    display: flex;
    padding: 3rem;

    @media screen and (max-width: 700px) {
        flex-wrap: wrap;
        flex-direction: column;
        padding: 0.5rem;
    }
`;

export const Section = styled.div`
    flex-basis: 50%;
    padding: 4px 20px;

    @media screen and (max-width: 700px) {
        margin: 5px 0;
    }
`;
export const PagesList = styled.a`
    display: block;
    text-decoration: none;
    color: white;
    margin-top: 10px;
    line-height: 2;
`;

export const Social = styled.div`
    margin: 20px 0;
`;

export const SocialLink = styled.a`
    padding: 3px;
    direction: none;
`;

export const Imgsocial = styled(Image)`
    width: auto;
    height: 32px;
    padding: 5px;
`;

export const Imgsociallogo = styled(Image)`
    width: 100px;
    height: 100px;
    margin-top: 30px;
`;
