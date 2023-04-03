import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f1f1f1;

    @media screen and (max-width: 1400px) {
        flex-direction: column;
    }
`;

export const StyledProduct = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8rem 10%;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        margin: 2rem 10%;
    }
`;

export const ProductImages = styled.div`
    width: 50%;
    position: relative;
    object-fit: contain;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 2rem;
    }

    .selected {
        opacity: 100;
    }
`;

export const ImageList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;

    justify-content: center;

    li {
        margin-right: 20px;
        cursor: pointer;
    }

    li:last-child {
        margin-right: 0;
    }

    img {
        width: 80px;
        height: 60px;
    }

    .selected {
        opacity: 1;
    }
`;

export const LeftArrow = styled.div`
    cursor: pointer;
    position: absolute;
    top: 30%;
    left: 5px;
    transform: translateY(-50%);
    width: 40px;
    height: 10px;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const RightArrow = styled.div`
    cursor: pointer;
    position: absolute;
    top: 30%;
    right: 5px;
    transform: translateY(-50%);
    width: 40px;
    height: 10px;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const ProductDetails = styled.div`
    width: 45%;
    align-self: flex-start;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: 2rem;
    }
`;

export const LocationWrapper = styled.div`
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-weight: bold;
`;

export const LocationLogo = styled.img`
    height: 30px;
    margin-right: 10px;
`;

export const ItemLocation = styled.p`
    font-size: 16px;
`;

export const InfoLogo = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const ContactInfo = styled.div`
    font-size: 18px;
    margin-top: 10px;
`;

export const ImageListItem = styled.li`
    img {
        opacity: ${(props) => (props.active ? "1" : "0.4")};
        &.selected {
            box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
            transition: box-shadow 0.3s ease-in-out;
        }
        &:hover {
            box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
            transition: box-shadow 0.3s ease-in-out;
        }
    }
`;
