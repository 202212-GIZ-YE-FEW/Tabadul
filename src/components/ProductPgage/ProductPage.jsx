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
    RelatedItemsContainer,
    RelatedItemCard,
    RelatedItemImage,
    RelatedItemDetails,
    RelatedItemTitle,
    RelatedItemLocation,
    RelatedItemDescription,
    Title,
} from "./product.style";

const relatedItems = [
    {
        id: 1,
        imageSrc: "/images/item1.png",
        title: "Related Item 1",
        location: "Location 1",
        type: "Clothes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        imageSrc: "/images/item1.png",
        title: "Related Item 2",
        location: "Location 2",
        type: "Shoes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        imageSrc: "/images/item1.png",
        title: "Related Item 3",
        location: "Location 3",
        type: "Accessories",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        imageSrc: "/images/item1.png",
        title: "Related Item 4",
        location: "Location 4",
        type: "Electronics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 5,
        imageSrc: "/images/item1.png",
        title: "Related Item 5",
        location: "Location 5",
        type: "Home Appliances",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const Product = ({ title, description, images = [], location }) => {
    const [activeImage, setActiveImage] = useState(
        images.length > 0 ? images[0].url : ""
    );
    const [navActive, setNavActive] = useState(true);

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
                    <img src={activeImage} alt='Product' className='active' />
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
                                <p>{location.name}</p>
                            </div>
                        )}
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

            <Title>Related Items</Title>
            <RelatedItemsContainer>
                <RelatedItemsContainer>
                    {relatedItems.map((item) => (
                        <RelatedItemCard key={item.id}>
                            <RelatedItemImage
                                src={item.imageSrc}
                                alt={item.title}
                                width={250}
                                height={200}
                            />

                            <RelatedItemDetails>
                                <RelatedItemTitle>
                                    {item.title}
                                </RelatedItemTitle>
                                <RelatedItemLocation>
                                    {item.location}
                                </RelatedItemLocation>
                                <RelatedItemDescription>
                                    {item.description}
                                </RelatedItemDescription>
                            </RelatedItemDetails>
                        </RelatedItemCard>
                    ))}
                </RelatedItemsContainer>
            </RelatedItemsContainer>
        </Container>
    );
};

export default Product;
