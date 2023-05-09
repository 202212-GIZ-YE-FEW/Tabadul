import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
    background: #ffffff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 338px;
    height: 413px;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
`;

export const BlogCard = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const ImageContainer = styled.div`
    padding-top: 4.68px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const BlogImage = styled(Image)`
    border-radius: 19px 19px 0px 0px;
`;
export const CardDate = styled.div`
    position: absolute;
    left: 1.4%;
    bottom: 0%;
    width: 120.27px;
    line-height: 40.52px;
    text-align: center;
    color: #ffffff;
    background: #33956d;
`;
export const BlogTitle = styled.div`
    color: #3c4347;
    text-align: center;
    margin-top: 12.92px;
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
`;

export const BlogDescription = styled.p`
    color: #3c4347;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    padding: 10px 17.29px 0 17.29px;
    margin: 13.31px 0 29.61px 0;
`;
