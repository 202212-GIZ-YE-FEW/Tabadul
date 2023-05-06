import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Signup from "@/components/Sign UP/Index";
import { useTranslation } from "next-i18next";

function SignUp() {
    return (
        <div>
            <Signup />
        </div>
    );
}

export default SignUp;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "signup",
                "common",
                "footer",
            ])),

            // Will be passed to the page component as props
        },
    };
}
