import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Signin from "@/components/Signin";

function SignIn() {
    return (
        <div>
            <Navbar />
            <Signin />
            <Footer />
        </div>
    );
}

export default SignIn;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["signin"])),
            // Will be passed to the page component as props
        },
    };
}
