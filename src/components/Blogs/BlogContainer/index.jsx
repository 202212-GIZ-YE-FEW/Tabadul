import React from "react";

import { Line } from "@/components/PopularItems/PopularItems.styled";

import { Header } from "./BlogContainer.styled";
import SingleBlogCard from "../SingleBlogCard";
import { BlogCard } from "../SingleBlogCard/SingleBlogCard.styled";

const BlogContainer = () => {
    return (
        <>
            <Header>Blogs</Header>
            <BlogCard>
                <SingleBlogCard />
                <SingleBlogCard />
                <SingleBlogCard />
                <SingleBlogCard />
            </BlogCard>
            <Line />
        </>
    );
};

export default BlogContainer;
