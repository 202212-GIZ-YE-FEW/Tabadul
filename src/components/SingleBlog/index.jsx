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

function SingleBlog({ title, desc, id, photo }) {
    return (
        <Blog>
            <ContentSide>
                <BlogHeading>{title}</BlogHeading>
                <BlogParagraph>{desc?.substring(0, 170)}...</BlogParagraph>
                <BlogButton>
                    <Link href={`Blogs/${id}`}>
                        <span>Read More</span>
                    </Link>
                </BlogButton>
            </ContentSide>
            <ImageSide>
                <BlogImge
                    src={photo}
                    alt='BlogPhoto'
                    priority
                    width={661}
                    height={432}
                />
            </ImageSide>
        </Blog>
    );
}

export default SingleBlog;
