import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Signup from "@/components/Sign UP/Index";

function SignUp() {
    return (
        <div>
            <Navbar />
            <Signup />
            <Footer />
        </div>
    );
}

export default SignUp;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["signup"])),
            // Will be passed to the page component as props
        },
    };
}
