import { useTranslation, withTranslation } from "next-i18next";
import React from "react";

import { CardLink } from "@/components/ListedItems/ListedItems.styled";
import { Line } from "@/components/PopularItems/PopularItems.styled";

import { Header } from "./BlogContainer.styled";
import SingleBlogCard from "../SingleBlogCard";
import { BlogCard } from "../SingleBlogCard/SingleBlogCard.styled";

const BlogContainer = ({ blogs }) => {
    const { t } = useTranslation("common");
    function translateMe(word) {
        return t(word);
    }

    return (
        <>
            <Header>{translateMe("blogs")}</Header>
            <BlogCard>
                {blogs?.slice(0, 4).map((blog) => {
                    return (
                        <CardLink key={blog.id} href={`Blogs/${blog.id}`}>
                            <SingleBlogCard
                                blogTitle={blog.title}
                                blog={blog.blog}
                                blogDate={blog.date}
                                blogImage={blog.image}
                            />
                        </CardLink>
                    );
                })}
            </BlogCard>
            <Line />
        </>
    );
};

export default BlogContainer;
