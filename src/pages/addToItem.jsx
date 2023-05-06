import React, { useEffect, useState } from "react";
import { db, fetchCategories, fetchLocations } from "@/utils/firebase";
import AddItem from "@/components/AddItem";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AddToItem = () => {
    const [categories, setCategories] = useState();
    const [location, setLocation] = useState();

    const { t } = useTranslation("addItem");
    async function getcats() {
        const cat = await fetchCategories();
        const categories_Without_All = cat.filter((cat) => {
            return cat.name !== "ALL";
        });
        setCategories(categories_Without_All);
    }

    async function getLocations() {
        const loc = await fetchLocations();

        setLocation(loc);
    }

    useEffect(() => {
        getcats();
        getLocations();
    }, []);

    return <AddItem categoriesList={categories} locationList={location} />;
};

export default AddToItem;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["addItem"])),
            // Will be passed to the page component as props
        },
    };
}
