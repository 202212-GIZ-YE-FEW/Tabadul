import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Causes from "@/components/Causes";
import Hero from "@/components/Herro";
import PopularItems from "@/components/PopularItems";
import ScrollTop from "@/components/ScrollTop";
import Statistics from "@/components/Statistics/Statistics";
import Layout from "@/layout/Layout";
import AddItem from "@/components/AddItem/Index";

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
            <Statistics />
            <PopularItems />
            <AddItem />
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
