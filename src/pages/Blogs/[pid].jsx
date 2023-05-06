import { doc, getDoc } from "firebase/firestore";
import React from "react";

import {
    Blogcontainer,
    Blogdec,
    Blogimg,
    Blogtitle,
} from "@/styles/Blogs.styled";
import { db, fetchBlogs } from "@/utils/firebase";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function blog({ blog }) {
    return (
        <Blogcontainer>
            <Blogimg
                src={blog.image}
                alt='Blog'
                width={1188}
                height={645}
                property='true'
            />
            <Blogtitle>{blog.title}</Blogtitle>
            <Blogdec>{blog.blog}</Blogdec>
        </Blogcontainer>
    );
}
export async function getStaticPaths({ locales }) {
    const blogs = await fetchBlogs(); // getting data from firbase.js so we can get id out of it

    const paths = blogs
        .map((blog) =>
            locales.map((locale) => ({
                params: { pid: blog.id },
                locale, // Pass locale here
            }))
        )
        .flat();
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    };
}
export async function getStaticProps({ params, locale }) {
    const docRef = doc(db, "blogs", params.pid);
    const data = await getDoc(docRef);
    const blogData = data.data();
    return {
        props: {
            blog: blogData,
            ...(await serverSideTranslations(locale, ["common", "footer"])),
        },
    };
}

export default blog;
