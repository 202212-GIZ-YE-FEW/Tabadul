import {
    Blogcontainer,
    Blogdec,
    Blogimg,
    Blogtitle,
} from "@/styles/Blogs.styled";
import React from "react";
import photo from "../../assets/Image/Photo.svg";
function blog({ blog }) {
    return (
        <Blogcontainer key={blog.id}>
            <Blogimg src={photo} alt='Blog' />
            <Blogtitle>{blog.title}</Blogtitle>
            <Blogdec>{blog.body}</Blogdec>
        </Blogcontainer>
        // <div key={blog.id}>
        //     <h1>{blog.title}</h1>
        //     <p>{blog.body}</p>
        // </div>
    );
}
export async function getStaticPaths() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await data.json();

    const paths = blogs.map((blog) => {
        return {
            params: {
                pid: String(blog.id),
            },
        };
    });
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    };
}
export async function getStaticProps({ params }) {
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + params.pid
    );
    const blog = await data.json();

    return {
        props: {
            blog,
        },
    };
}
export default blog;
