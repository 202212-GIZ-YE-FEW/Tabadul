import { Poppins } from "next/font/google";
import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";
import Layout from "@/layout/Layout";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700", "800"],
});

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <main className={poppins.className}>
                <Component {...pageProps} />
            </main>
        </Layout>
    );
}

export default appWithTranslation(MyApp);
