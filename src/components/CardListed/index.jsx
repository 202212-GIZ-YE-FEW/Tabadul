import React, { useState } from "react";

import { BoxCard, Container } from "./Cardlist.style";
import Categories from "../Categories";
import PopularItems from "../PopularItems";
import { CARDS } from "../../../data/db";
function CardListed() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemDisplay = CARDS.filter((item) => {
        if (selectedCategory === "All") return true;

        return selectedCategory === item.category;
    });
    function handleCategory(CatName) {
        setSelectedCategory(CatName);
    }
    return (
        <Container>
            <Categories handleCategory={handleCategory} />
            <BoxCard>
                {itemDisplay.map((element) => {
                    return (
                        <PopularItems
                            key={element.id}
                            location={element.location}
                            category={element.category}
                            photo={element.photo}
                        />
                    );
                })}
            </BoxCard>
        </Container>
    );
}

export default CardListed;
