import Image from "next/image";
import { useState } from "react";

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

const productImages = [
    "/images/item1.png",
    "/images/item2.png",
    "/images/item3.png",
];

const Product = () => {
    const [activeImage, setActiveImage] = useState(productImages[1]);
    const [navActive, setNavActive] = useState(true);

    const handlePrev = () => {
        const currentIndex = productImages.indexOf(activeImage);
        const newIndex =
            (currentIndex - 1 + productImages.length) % productImages.length;
        setActiveImage(productImages[newIndex]);
    };

    const handleNext = () => {
        const currentIndex = productImages.indexOf(activeImage);
        const newIndex = (currentIndex + 1) % productImages.length;
        setActiveImage(productImages[newIndex]);
    };

    const changeImage = (image) => {
        setActiveImage(image);
    };

    return (
        <Container>
            <StyledProduct>
                <ProductImages>
                    <img src={activeImage} alt='Product' />
                    <ImageList
                        className={`${navActive ? "active" : ""}`}
                        style={{ padding: "5px" }}
                    >
                        <LeftArrow onClick={handleNext}>
                            <img src='/images/left.png' alt='Next' />
                        </LeftArrow>
                        {productImages.map((image, index) => (
                            <ImageListItem
                                active={activeImage === image}
                                key={index}
                            >
                                <Image
                                    src={image}
                                    alt={`Product Image ${index + 1}`}
                                    onClick={() => changeImage(image)}
                                    className={
                                        activeImage === image ? "selected" : ""
                                    }
                                    width={300}
                                    height={300}
                                />
                            </ImageListItem>
                        ))}
                        <RightArrow onClick={handleNext}>
                            <img src='/images/right.png' alt='Next' />
                        </RightArrow>
                    </ImageList>
                </ProductImages>
                <ProductDetails>
                    <h1 className='productName'>Item title</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tincidunt nisl sit amet dolor euismod, ac vehicula
                        erat tincidunt. Fusce suscipit nulla eget odio rutrum
                        imperdiet.
                    </p>
                    <LocationWrapper>
                        <LocationLogo
                            src='/images/location.png'
                            alt='Location Logo'
                        />
                        <div>
                            <p>Item Location</p>
                        </div>
                    </LocationWrapper>

                    <ContactInfo>
                        <InfoLogo src='/images/info.png' alt='Info' />
                        <div>
                            <p>Name Surname</p>
                            <p>Phone: 01122334455</p>
                            <p>Email: mail@mail.com</p>
                        </div>
                    </ContactInfo>
                </ProductDetails>
            </StyledProduct>
        </Container>
    );
};

export default Product;
