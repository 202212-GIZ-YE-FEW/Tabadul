import styled from "@emotion/styled";
import Image from "next/image";

export const PartnersContainer = styled.div``;
export const Header = styled.h1`
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 84px;
    color: #3c4347;
    margin-bottom: 90px;
    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
`;

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 50px;
    position: relative;
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
    & .swiper .swiper-slide {
        display: grid;
        place-items: center;
        padding-top: 30px;
        padding-bottom: 100px;
    }
    & .swiper .swiper-pagination-bullet {
        width: 16.56px;
        height: 16.56px;
        transition: all 0.3s;
        background-color: #33956d;
        opacity: 1;
    }
    & .swiper .swiper-pagination-bullet-active {
        width: 48px;
        border-radius: 11px;
    }
    & .swiper-button-next,
    & .swiper-button-prev {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #33956d;
        position: absolute;
    }
    & .swiper-button-prev:after,
    & .swiper-button-next:after {
        font-size: 16px;
        color: #fff;
    }
`;

export const PartnerImage = styled(Image)`
    max-width: 100%;
    width: 180px;
    height: 180px;
`;
