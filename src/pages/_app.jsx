import { Poppins } from "next/font/google";
import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
    return (
        <main className={poppins.className}>
            <Component {...pageProps} />
        </main>
    );
}

export default appWithTranslation(MyApp);
