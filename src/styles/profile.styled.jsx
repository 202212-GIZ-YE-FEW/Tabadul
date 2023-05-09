import styled from "@emotion/styled";

export const ProfileSection = styled.div`
    background-color: #fff;
    padding-top: 150px;
    padding-bottom: 150px;
    @media screen and (max-width: 768px) {
        padding-top: 80px;
        padding-bottom: 100px;
    }
`;
export const Container = styled.div`
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
        width: 1500px;
    }
`;
