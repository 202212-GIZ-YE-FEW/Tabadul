import React from "react";

import {
    BlogDescription,
    BlogImage,
    BlogTitle,
    CardDate,
    Container,
    ImageContainer,
} from "./SingleBlogCard.styled";

function SingleBlogCard() {
    return (
        <Container>
            <ImageContainer>
                <BlogImage
                    src='images/donation.svg'
                    alt='Blog Image'
                    width={328.57}
                    height={217.41}
                />
                <CardDate>2 July</CardDate>
            </ImageContainer>
            <BlogTitle>Blog Title</BlogTitle>
            <BlogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
            </BlogDescription>
        </Container>
    );
}

export default SingleBlogCard;
