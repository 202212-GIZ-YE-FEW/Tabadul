import React from "react";
import { ShimmerContentBlock } from "react-shimmer-effects-18";

import SingleBlog from "@/components/SingleBlog";

import { fetchBlogs } from "@/utils/firebase";

import { BlogContainer } from "../../components/SingleBlog/SingleBlog.styled";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function BlogPage({ blogs }) {
    const { t } = useTranslation("common");
    return (
        <BlogContainer>
            {blogs?.length > 0 ? (
                blogs.map((blog) => {
                    return (
                        <SingleBlog
                            key={blog.id}
                            title={blog.title}
                            desc={blog.blog}
                            photo={blog.image}
                            id={blog.id}
                        />
                    );
                })
            ) : (
                <>
                    <ShimmerContentBlock
                        title
                        text
                        cta
                        thumbnailWidth={370}
                        thumbnailHeight={370}
                    />
                    <ShimmerContentBlock
                        title
                        text
                        cta
                        thumbnailWidth={370}
                        thumbnailHeight={370}
                    />
                    <ShimmerContentBlock
                        title
                        text
                        cta
                        thumbnailWidth={370}
                        thumbnailHeight={370}
                    />
                </>
            )}
        </BlogContainer>
    );
}
export default BlogPage;

export async function getStaticProps({ locale }) {
    const blogs = await fetchBlogs(); // getting the Data Ordered & orgainzed from fetchBlogs fun at firebase.js

    return {
        props: {
            blogs,
            ...(await serverSideTranslations(locale, ["common", "footer"])),
        }, // will be passed to the page component as props
    };
}
