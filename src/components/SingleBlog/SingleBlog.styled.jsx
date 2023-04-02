import styled from "@emotion/styled";

export const BlogContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
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
        width: 1400px;
    }
`;
export const Blog = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 132px;
`;
export const ContentSide = styled.div`
    text-align: left;
    flex: 1;
`;
export const ImageSide = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    text-align: center;
`;
export const BlogHeading = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #000000;
`;
export const BlogParagraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    width: 657px;
`;
export const BlogButton = styled.button`
    color: #fff;
    background-color: #33956d;
    border-radius: 82px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    width: 205px;
    height: 49.16px;
    border: none;
`;
