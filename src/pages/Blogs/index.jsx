import React from "react";

import SingleBlog from "@/components/SingleBlog";

import { fetchBlogs } from "@/utils/firebase";

import { BlogContainer } from "../../components/SingleBlog/SingleBlog.styled";
function BlogPage({ blogs }) {
    return (
        <BlogContainer>
            {blogs?.map((blog) => {
                return (
                    <SingleBlog
                        key={blog.id}
                        title={blog.title}
                        desc={blog.blog}
                        photo={blog.image}
                        id={blog.id}
                    />
                );
            })}
        </BlogContainer>
    );
}
export default BlogPage;

export async function getStaticProps() {
    const blogs = await fetchBlogs(); // getting the Data Ordered & orgainzed from fetchBlogs fun at firebase.js

    return {
        props: {
            blogs,
        }, // will be passed to the page component as props
    };
}
