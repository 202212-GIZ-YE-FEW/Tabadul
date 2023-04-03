import { Container } from "@/components/CardListed/Cardlist.style";
import Categories from "@/components/Categories";
import ListedItems from "@/components/ListedItems/ListedItems";
import React, { useEffect, useState } from "react";
import { items } from "../components/ListedItems/data";

const ListofItems = () => {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [hitRecent, setHitRecent] = useState(false);
    const [filter, setFilter] = useState();
    const [handleFilter, setHandleFilter] = useState();

    function handleCategory(CatName) {
        setHitRecent((prev) => !prev);
        setSelectedCategory(CatName);
    }
    useEffect(() => {
        if (selectedCategory === "ALL") {
            setHandleFilter();
            setFilter(items);
        } else {
            setHandleFilter(selectedCategory);
        }
    }, [selectedCategory, hitRecent]);

    return (
        <Container>
            <Categories handleCategory={handleCategory} />
            <ListedItems
                setFilter={setFilter}
                filter={filter}
                setHandleFilter={setHandleFilter}
                handleFilter={handleFilter}
                selectedCategory={selectedCategory}
                items={items}
            />
        </Container>
    );
};

export default ListofItems;
