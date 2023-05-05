import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import AddItem from "@/components/AddItem";

function AddItems() {
    return (
        <div>
            <AddItem />
        </div>
    );
}

export default AddItems;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["addItem"])),
            // Will be passed to the page component as props
        },
    };
}
