import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { appWithTranslation, useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";

import Loading from "@/components/Loading";

import Layout from "@/layout/Layout";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    const { locale } = useRouter();

    const dir = locale === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        document.documentElement.dir = dir;
    }, [dir]);
    useEffect(() => {
        let timer = setTimeout(() => setLoading(true), 500);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            {loading ? (
                <main className={poppins.className}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </main>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default appWithTranslation(MyApp);
