import React from "react";

import { ItemsListDiv } from "./ListedItems.styled";
import Card from "../Card/Card";

const ItemsList = ({ filters }) => {
    return (
        <ItemsListDiv>
            {filters?.map((item) => {
                return (
                    <Card
                        key={item.id}
                        productImage={item.image[0].url}
                        id={item.id}
                        title={item.title}
                        location={item.location}
                        category={item.category}
                        date={item.date}
                        description={item.description}
                    />
                );
            })}
        </ItemsListDiv>
    );
};

export default ItemsList;
