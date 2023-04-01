import React, { useState } from "react";

import {
    BoxCard,
    Container,
    InputContainer,
    SerachBar,
    SerachBarImage,
} from "./Cardlist.style";
import Categories from "../Categories";
import PopularItems from "../PopularItems";
import SerachSvg from "../../assets/Image/SearchIcon.svg";
import { CARDS } from "../../../data/db";
function CardListed() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    function handleSerach(e) {
        setSearch(e.target.value);
    }
    const itemDisplay = CARDS.filter((items) => {
        return (
            items.location.toLowerCase().includes(search.toLowerCase()) ||
            items.category.toLowerCase().includes(search.toLowerCase())
        );
    }).filter((item) => {
        if (selectedCategory === "All") return true;

        return selectedCategory === item.category;
    });
    function handleCategory(CatName) {
        setSelectedCategory(CatName);
    }
    return (
        <Container>
            <InputContainer>
                <SerachBarImage
                    src={SerachSvg}
                    alt='SearchIcon'
                    width={86.28}
                    height={84.74}
                />
                <SerachBar
                    type='text'
                    placeholder='Search'
                    value={search}
                    onChange={handleSerach}
                />
            </InputContainer>

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
