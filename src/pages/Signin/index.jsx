import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Signin from "@/components/Signin";
import { useTranslation } from "next-i18next";

function SignIn() {
    const { t } = useTranslation("signin");
    return (
        <div>
            <Signin />
        </div>
    );
}

export default SignIn;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "signin",
                "common",
                "footer",
            ])),
            // Will be passed to the page component as props
        },
    };
}
