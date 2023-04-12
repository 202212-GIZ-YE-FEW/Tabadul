import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { useEffect } from "react";

import BlogContainer from "@/components/Blogs/BlogContainer";
import Causes from "@/components/Causes";
import Hero from "@/components/Herro";
import Partners from "@/components/Partners";
import PopularItemsSection from "@/components/PopularItemsSection";
import ScrollTop from "@/components/ScrollTop";
import Statistics from "@/components/Statistics/Statistics";

import Layout from "@/layout/Layout";
import { fetchBlogs, fetchItems } from "@/utils/firebase";

export default function HomePage({ items, blogs }) {
    const router = useRouter();

    const { t } = useTranslation("common");

    useEffect(() => {
        let dir = router.locale == "ar" ? "rtl" : "ltr";
        let lang = router.locale == "ar" ? "ar" : "en";
        document.querySelector("html").setAttribute("dir", dir);
        document.querySelector("html").setAttribute("lang", lang);
    }, [router.locale]);

    return (
        <Layout>
            <p>{t("ooo")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    English
                </Link>
                <Link href='/' locale='ar'>
                    العربية
                </Link>
                <Link href='/Blogs'>Blogs</Link>
                <Link href='/Aboutus'>About us</Link>
                <Link href='/Items'>Profile</Link>
            </div>
            <Hero />
            <Causes />
            <Statistics />
            <PopularItemsSection items={items} />
            <BlogContainer blogs={blogs} />
            <Partners />
            <ScrollTop /> {/* leave this at the bottom of layout */}
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    const items = await fetchItems();
    const blogs = await fetchBlogs();
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
            items,
            blogs,
        },
    };
}
