import React from "react";

import { Line } from "@/components/PopularItems/PopularItems.styled";

import { Container, Header } from "./BlogContainer.styled";
import SingleBlogCard from "../SingleBlogCard";

const BlogContainer = () => {
    return (
        <>
            <Header>Blogs</Header>
            <Container>
                <SingleBlogCard />
                <SingleBlogCard />
                <SingleBlogCard />
                <SingleBlogCard />
            </Container>
            <Line />
        </>
    );
};

export default BlogContainer;
