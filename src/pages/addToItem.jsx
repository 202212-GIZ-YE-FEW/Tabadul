import React, { useEffect, useState } from "react";
import { db, fetchCategories, fetchLocations } from "@/utils/firebase";
import AddItem from "@/components/AddItem";

const AddToItem = () => {
    const [categories, setCategories] = useState();
    const [location, setLocation] = useState();

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
