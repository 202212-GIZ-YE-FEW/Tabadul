import { Blogs } from "data/db";
import React from "react";

import SingleBlog from "@/components/SingleBlog";

import { BlogContainer } from "../../components/SingleBlog/SingleBlog.styled";
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
                    />
                );
            })}
        </BlogContainer>
    );
}

export default BlogPage;
