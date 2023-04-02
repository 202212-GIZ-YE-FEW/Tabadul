import Image from "next/image";
import React from "react";

import {
    Blog,
    BlogButton,
    BlogContainer,
    BlogHeading,
    BlogParagraph,
    ContentSide,
    ImageSide,
} from "./SingleBlog.styled";
import BlogPImage from "../../assets/Image/Photo.svg";
function SingleBlog() {
    return (
        <BlogContainer>
            <Blog>
                <ContentSide>
                    <BlogHeading>Title</BlogHeading>
                    <BlogParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                    </BlogParagraph>
                    <BlogButton>Read more</BlogButton>
                </ContentSide>
                <ImageSide>
                    <Image src={BlogPImage} alt='BlogPhoto' />
                </ImageSide>
            </Blog>
        </BlogContainer>
    );
}

export default SingleBlog;
