import { Poppins } from "next/font/google";
import { appWithTranslation, i18n } from "next-i18next";

import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
    const { locale } = useRouter();
    const dir = locale === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        document.documentElement.dir = dir;
    }, [dir]);

    return (
        <main className={poppins.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    );
}

export default appWithTranslation(MyApp);
