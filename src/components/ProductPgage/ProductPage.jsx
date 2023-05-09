import Image from "next/image";
import { useState, useEffect } from "react";
import {
    ContactInfo,
    Container,
    ImageList,
    ImageListItem,
    InfoLogo,
    LeftArrow,
    LocationLogo,
    LocationWrapper,
    ProductDetails,
    ProductImages,
    RightArrow,
    StyledProduct,
} from "./product.style";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Product = ({
    title,
    description,
    images = [],
    location,
    name,
    phone,
    email,
}) => {
    const { t } = useTranslation("SingleProduct");
    const router = useRouter();
    const [activeImage, setActiveImage] = useState(
        images.length > 0 ? images[0].url : ""
    );
    const [navActive, setNavActive] = useState(true);

    useEffect(() => {
        setActiveImage(images.length > 0 ? images[0].url : "");
        setNavActive(true);
    }, [images, location]);

    const handlePrev = () => {
        const currentIndex = images.findIndex(
            (image) => image.url === activeImage
        );
        const newIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setActiveImage(images[newIndex].url);
    };

    const handleNext = () => {
        const currentIndex = images.findIndex(
            (image) => image.url === activeImage
        );
        const newIndex =
            currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setActiveImage(images[newIndex].url);
    };

    const changeImage = (image) => {
        setActiveImage(image.url);
    };

    return (
        <Container>
            <StyledProduct>
                <ProductImages>
                    <div className='active-image-container'>
                        <img
                            src={activeImage}
                            alt='Product'
                            className='active-image'
                        />
                    </div>
                    <ImageList
                        className={`${navActive ? "active" : ""}`}
                        style={{ paddingRight: "50px" }}
                    >
                        <LeftArrow onClick={handlePrev}>
                            <img src='/images/left.png' alt='Previous' />
                        </LeftArrow>
                        {images.map((image, index) => (
                            <ImageListItem
                                active={activeImage === image.url}
                                key={index}
                            >
                                <div
                                    onClick={() => changeImage(image)}
                                    className={
                                        activeImage === image.url
                                            ? "selected"
                                            : ""
                                    }
                                >
                                    <Image
                                        src={image.url}
                                        alt={`Product Image ${index + 1}`}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </ImageListItem>
                        ))}
                        <RightArrow onClick={handleNext}>
                            <img src='/images/right.png' alt='Next' />
                        </RightArrow>
                    </ImageList>
                </ProductImages>
                <ProductDetails>
                    <h1 className='productName'>{title}</h1>
                    <p>{description}</p>
                    <LocationWrapper>
                        <LocationLogo
                            src='/images/location.png'
                            alt='Location Logo'
                        />
                        {location && location.name && (
                            <div>
                                <p>
                                    {router.locale === "en"
                                        ? location.name
                                        : location.name_ar}
                                </p>
                            </div>
                        )}
                    </LocationWrapper>

                    <ContactInfo>
                        <InfoLogo src='/images/info.png' alt='Info' />
                        <div>
                            <p>
                                {t("name")} : {name}
                            </p>
                            <p>
                                {t("phone")} : {phone}
                            </p>
                            <p>
                                {t("Email")} : {email}
                            </p>
                        </div>
                    </ContactInfo>
                </ProductDetails>
            </StyledProduct>
        </Container>
    );
};

export default Product;
