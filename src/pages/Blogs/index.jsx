import React from "react";

import SingleBlog from "@/components/SingleBlog";

import { BlogContainer } from "../../components/SingleBlog/SingleBlog.styled";
import { Blogs } from "../../../data/Blogs";
function BlogPage() {
    return (
        <BlogContainer>
            {Blogs.map((blog) => {
                return (
                    <SingleBlog
                        key={blog.id}
                        title={blog.title}
                        desc={blog.desc}
                        photo={blog.photo}
                        id={blog.id}
                    />
                );
            })}
        </BlogContainer>
    );
}

export default BlogPage;
