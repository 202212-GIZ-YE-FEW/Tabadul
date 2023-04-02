import React from "react";

import {
    CardCategory,
    CardImage,
    DateAndTime,
    ItemCard,
    ItemIcon,
    ItemLocationTitle,
    ItemsListDiv,
} from "./ListedItems.styled";
import { Cardinfo, CardParagraph } from "../PopularItems/PopularItems.styled";

const ItemsList = ({ filter }) => {
    // console.log("filter");
    return (
        <ItemsListDiv>
            {filter &&
                filter.map((datum) => {
                    return (
                        <ItemCard key={datum.id}>
                            <CardImage
                                src={datum.image}
                                alt='CardImage'
                                width={258.4}
                                height={185.44}
                            />
                            <Cardinfo>
                                <ItemIcon
                                    src='/images/Vector.svg'
                                    alt='Icon'
                                    width={17.77}
                                    height={22.61}
                                />
                                <ItemLocationTitle>
                                    {datum.location}
                                </ItemLocationTitle>
                            </Cardinfo>
                            <CardCategory>{datum.category}</CardCategory>
                            <DateAndTime>
                                {datum.date} {datum.time}
                            </DateAndTime>
                            <CardParagraph>{datum.description}</CardParagraph>
                        </ItemCard>
                    );
                })}
        </ItemsListDiv>
    );
};

export default ItemsList;
