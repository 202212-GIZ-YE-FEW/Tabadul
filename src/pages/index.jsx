import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import Layout from "@/layout/Layout";
import Hero from "@/components/Herro";
import Causes from "@/components/Causes";
import ScrollTop from "@/components/ScrollTop";
import PopularItems from "@/components/PopularItems";

export default function HomePage() {
    const { t } = useTranslation("common");

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
            </div>
            <Hero />
            <Causes />
            <PopularItems />
            <ScrollTop /> {/* leave this at the bottom of layout */}
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
