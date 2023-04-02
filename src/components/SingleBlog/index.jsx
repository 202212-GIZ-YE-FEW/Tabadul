import Image from "next/image";
import React from "react";

import {
    Blog,
    BlogButton,
    BlogHeading,
    BlogParagraph,
    ContentSide,
    ImageSide,
} from "./SingleBlog.styled";
function SingleBlog({ title, desc, photo }) {
    return (
        <Blog>
            <ContentSide>
                <BlogHeading>{title}</BlogHeading>
                <BlogParagraph>{desc}</BlogParagraph>
                <BlogButton>Read more</BlogButton>
            </ContentSide>
            <ImageSide>
                <Image src={photo} alt='BlogPhoto' />
            </ImageSide>
        </Blog>
    );
}

export default SingleBlog;
