import styled from "@emotion/styled";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
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

export const ContainerCategories = styled.div`
    width: 236px;
    height: 260px;
    background-color: #fff;
    box-shadow: 1px 0px 59px 4px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

export const CategoryParagraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    color: #3c4347;
`;
