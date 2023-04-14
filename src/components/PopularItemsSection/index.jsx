import React from "react";

import PopularItems from "../PopularItems";
import { Cards, Header, Line } from "../PopularItems/PopularItems.styled";
import photoImg from "../../../public/images/Cardimg.svg";
import Link from "next/link";
import { CardLink } from "../ListedItems/ListedItems.styled";

function PopularItemsSection({ items }) {
    return (
        <div>
            <div style={{ position: "relative", top: "-90px" }}>
                <Header>Popular Items</Header>
                <Cards>
                    {items?.slice(0, 5).map((item) => {
                        return (
                            <CardLink
                                key={item.id}
                                href={`Products/${item.id}`}
                            >
                                <PopularItems
                                    location={item.location.name}
                                    category={item.category.name}
                                    photo={item.image[0].url}
                                    description={item.description}
                                    title={item.title}
                                    date={item.date}
                                />
                            </CardLink>
                        );
                    })}
                </Cards>
                <Line />
            </div>
        </div>
    );
}

export default PopularItemsSection;
