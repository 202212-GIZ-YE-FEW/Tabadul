import { onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";

import BlogContainer from "@/components/Blogs/BlogContainer";
import Causes from "@/components/Causes";
import Hero from "@/components/Herro";
import Partners from "@/components/Partners";
import PopularItemsSection from "@/components/PopularItemsSection";
import ScrollTop from "@/components/ScrollTop";
import Statistics from "@/components/Statistics/Statistics";

import { fetchBlogs, fetchItems } from "@/utils/firebase";

export default function HomePage({ items, blogs }) {
    const { t } = useTranslation("common");

    return (
        <div>
            {/* <p>{t("ooo")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>
            </div> 


               ^-^ just to make sure the nabvar is working 
            */}
            <Hero />
            <Causes />
            <Statistics />
            <PopularItemsSection items={items} />
            <BlogContainer blogs={blogs} />
            <Partners />
            <ScrollTop /> {/* leave this at the bottom of layout */}
        </div>
    );
}

export async function getStaticProps({ locale }) {
    const items = await fetchItems();
    const blogs = await fetchBlogs();
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "hero",
                "causes",
                "footer",
                "statistics",
            ])),
            // Will be passed to the page component as props
            items,
            blogs,
        },
    };
}
