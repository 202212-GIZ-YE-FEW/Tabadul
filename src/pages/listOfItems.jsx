import { Container } from "@/components/CardListed/Cardlist.style";
import Categories from "@/components/Categories";
import ListedItems from "@/components/ListedItems/ListedItems";
import React, { useEffect, useState } from "react";
import { fetchItems } from "@/utils/firebase";

const ListofItems = () => {
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
    }, [items]);

    return (
        <Container>
            <Categories handleCategory={handleSelectCategory} />
            <ListedItems
                setFilters={setFilters}
                filters={filters}
                setHandleFilter={setHandleFilter}
                handleFilter={handleFilter}
                items={items}
            />
        </Container>
    );
};

export default ListofItems;
