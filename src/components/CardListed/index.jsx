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
            items.text.toLowerCase().includes(search.toLowerCase()) ||
            items.category.toLowerCase().includes(search.toLowerCase())
        );
    }).filter((item) => {
        if (selectedCategory === "All") return true;

        return selectedCategory === item.category;
    });
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

            <Categories setSelectedCategory={setSelectedCategory} />
            <BoxCard>
                {itemDisplay.map((element) => {
                    return (
                        <PopularItems
                            key={element.id}
                            location={element.text}
                            category={element.category}
                        />
                    );
                })}
            </BoxCard>
        </Container>
    );
}

export default CardListed;
