import React from "react";
function blog({ blog }) {
    return (
        <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
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
