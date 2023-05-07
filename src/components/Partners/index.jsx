import { withTranslation } from "next-i18next";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
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
import shephersInc from "../../../public/images/railogo.svg";
function Partners({ t }) {
    return (
        <PartnersContainer>
            <Header>{t("OurPartners")}</Header>
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
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                    }}
                >
                    <SwiperSlide>
                        <PartnerImage src={shephersInc} />
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

export default withTranslation("common")(Partners);
