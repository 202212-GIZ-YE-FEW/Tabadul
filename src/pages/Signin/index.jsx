import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Signin from "@/components/Signin";

function SignIn() {
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
            ...(await serverSideTranslations(locale, ["signin"])),
            // Will be passed to the page component as props
        },
    };
}
