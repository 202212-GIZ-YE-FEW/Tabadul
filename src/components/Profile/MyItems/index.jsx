import React from "react";

import {
    Container,
    Header,
    Icon,
    ItemCard,
    ItemImage,
    Text,
} from "./MyItems.styled";
import deleteIcon from "../../../../public/images/deleteIcon.svg";
import Img from "../../../../public/images/itemplaceholdersvg.svg";
import penIcon from "../../../../public/images/itemsPen.svg";

const MyItems = ({ items }) => {
    const localItems = {
        img: Img,
        productTitle: "Product Title",
    };
    return (
        <>
            <Header>My Items</Header>
            <Container>
                <ItemCard>
                    <ItemImage
                        src={localItems.img}
                        alt={localItems.productTitle}
                    />
                    <Text>{localItems.productTitle}</Text>
                    <Icon
                        src={penIcon}
                        alt={localItems.productTitle}
                        style={{ marginLeft: "auto" }}
                    />
                    <Icon src={deleteIcon} alt={localItems.productTitle} />
                </ItemCard>
            </Container>
        </>
    );
};

export default MyItems;
