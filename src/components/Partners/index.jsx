import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import {
    Container,
    Header,
    PartnerImage,
    PartnersContainer,
} from "./Partners.styled";
import sevenUp from "../../assets/Image/sevenup.svg";
function Partners() {
    return (
        <PartnersContainer>
            <Header>Our Partners</Header>
            <Container>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                        639: {
                            slidesPerView: 2,
                        },
                        865: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                        1500: {
                            slidesPerView: 3,
                        },
                        1700: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <PartnerImage src={sevenUp} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PartnerImage src={sevenUp} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PartnerImage src={sevenUp} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PartnerImage src={sevenUp} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PartnerImage src={sevenUp} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PartnerImage src={sevenUp} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </PartnersContainer>
    );
}

export default Partners;
