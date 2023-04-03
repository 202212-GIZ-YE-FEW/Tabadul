import Link from "next/link";
import React from "react";

import {
    Blog,
    BlogButton,
    BlogHeading,
    BlogImge,
    BlogParagraph,
    ContentSide,
    ImageSide,
} from "./SingleBlog.styled";

function SingleBlog({ title, desc, photo, id }) {
    return (
        <Blog>
            <ContentSide>
                <BlogHeading>{title}</BlogHeading>
                <BlogParagraph>{desc}</BlogParagraph>

                <BlogButton>
                    <Link href={`/Blogs/${id}`}>
                        <span>Read More</span>
                    </Link>
                </BlogButton>
            </ContentSide>
            <ImageSide>
                <BlogImge src={photo} alt='BlogPhoto' />
            </ImageSide>
        </Blog>
    );
}

export default SingleBlog;
