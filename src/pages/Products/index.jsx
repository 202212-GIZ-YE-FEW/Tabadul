import React, { useEffect, useState } from "react";

import { Container } from "@/components/CardListed/Cardlist.style";
import Categories from "@/components/Categories";
import ListedItems from "@/components/ListedItems/ListedItems";

import { fetchItems } from "@/utils/firebase";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ProductsItems = () => {
    const { t } = useTranslation("common");
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [hitRecent, setHitRecent] = useState(false);
    const [filters, setFilters] = useState();
    const [handleFilter, setHandleFilter] = useState();
    const [items, setItems] = useState();

    function handleSelectCategory(CatName) {
        setHitRecent((prev) => !prev);
        setSelectedCategory(CatName);
    }

    async function getItems() {
        const items = await fetchItems();
        setFilters(items); //for initial data when the page load
        setItems(items);
    }

    function checkLang(checkME) {
        if (document.querySelector("html").lang === "en") {
            return checkME?.name;
        } else return checkME?.name_ar;
    }

    useEffect(() => {
        if (selectedCategory.name === "ALL") {
            setHandleFilter();
            setFilters(items);
        } else {
            const firebaseCates = items?.filter((item) => {
                return item.category.id === selectedCategory.id;
            });
            setFilters(firebaseCates);
        }
    }, [selectedCategory, hitRecent]);

    useEffect(() => {
        getItems();
    }, []);

    return (
        <Container>
            <Categories
                handleCategory={handleSelectCategory}
                checkLang={checkLang}
            />
            <ListedItems
                checkLang={checkLang}
                setFilters={setFilters}
                filters={filters}
                setHandleFilter={setHandleFilter}
                handleFilter={handleFilter}
                items={items}
            />
        </Container>
    );
};

export default ProductsItems;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "footer"])),
            // Will be passed to the page component as props
        },
    };
}
