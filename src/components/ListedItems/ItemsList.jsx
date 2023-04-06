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

const ItemsList = ({ filters }) => {
    return (
        <ItemsListDiv>
            {filters?.map((item) => {
                return (
                    <ItemCard key={item.id}>
                        <CardImage
                            src={item.image}
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
                                {item.location.name}
                            </ItemLocationTitle>
                        </Cardinfo>
                        <CardCategory>{item.category.name}</CardCategory>
                        <DateAndTime>
                            {item.date} {item.time}
                        </DateAndTime>
                        <CardParagraph>{item.description}</CardParagraph>
                    </ItemCard>
                );
            })}
        </ItemsListDiv>
    );
};

export default ItemsList;
