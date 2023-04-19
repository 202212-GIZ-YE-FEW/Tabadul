import React from "react";

import { Line } from "@/components/PopularItems/PopularItems.styled";

import { Header } from "./BlogContainer.styled";
import SingleBlogCard from "../SingleBlogCard";
import { BlogCard } from "../SingleBlogCard/SingleBlogCard.styled";
import { CardLink } from "@/components/ListedItems/ListedItems.styled";

const BlogContainer = ({ blogs }) => {
    return (
        <>
            <Header>Blogs</Header>
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
