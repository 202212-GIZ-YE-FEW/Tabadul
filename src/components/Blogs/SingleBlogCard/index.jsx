import React from "react";

import {
    BlogDescription,
    BlogImage,
    BlogTitle,
    CardDate,
    Container,
    ImageContainer,
} from "./SingleBlogCard.styled";

function SingleBlogCard(props) {
    const { blogTitle, blog, blogDate, blogImage } = props;

    const dateIntoArray = blogDate?.split("/");

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString("en-US", {
            month: "long",
        });
    }

    return (
        <Container>
            <ImageContainer>
                <BlogImage
                    src={blogImage}
                    alt='Blog Image'
                    width={328.57}
                    height={217.41}
                />
                <CardDate>
                    {dateIntoArray ? dateIntoArray[0] : null}{" "}
                    {getMonthName(dateIntoArray ? dateIntoArray[1] : null)}
                </CardDate>
            </ImageContainer>
            <BlogTitle>{blogTitle}</BlogTitle>
            <BlogDescription>
                {blog?.length > 50 ? `${blog.substring(0, 50)} ...` : blog}
            </BlogDescription>
        </Container>
    );
}

export default SingleBlogCard;
