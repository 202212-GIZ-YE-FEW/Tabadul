import Link from "next/link";
import { useTranslation, withTranslation } from "next-i18next";
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
    const { t } = useTranslation("common");
    function translateMe(word) {
        return t(word);
    }
    return (
        <Blog data-aos='fade-up' data-aos-duration='1000'>
            <ContentSide>
                <BlogHeading>{title}</BlogHeading>
                <BlogParagraph>{desc?.substring(0, 170)}...</BlogParagraph>
                <BlogButton>
                    <Link href={`Blogs/${id}`}>
                        <span>{translateMe("ReadMore")}</span>
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
