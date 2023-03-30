import React, { useState } from "react";

import {
    BoxCard,
    Card,
    CardHeader,
    Cardimg,
    Cardinfo,
    CardParagraph,
    Container,
    LocationTitle,
} from "./Cardlist.style";
import Categories from "../Categories";
import { CARDS } from "../../../data/db";
function CardListed() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const itemDisplay = CARDS.filter((item) => {
        if (selectedCategory === "All") return true;

        return selectedCategory === item.category;
    });
    return (
        <Container>
            <Categories setSelectedCategory={setSelectedCategory} />
            <BoxCard>
                {itemDisplay.map((ele) => {
                    return (
                        <Card key={ele.id}>
                            <Cardimg
                                src='/images/Cardimg.svg'
                                alt='CardImage'
                                width={258.4}
                                height={185.44}
                            />
                            <Cardinfo>
                                <LocationTitle>Istanbol</LocationTitle>
                            </Cardinfo>
                            <CardHeader>{ele.category}</CardHeader>
                            <CardParagraph>
                                Short description for the available item{" "}
                            </CardParagraph>
                        </Card>
                    );
                })}
            </BoxCard>
        </Container>
    );
}

export default CardListed;
