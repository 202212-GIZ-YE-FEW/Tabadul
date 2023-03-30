import React from "react";

import PopularItems from "../PopularItems";
import { Cards, Header, Line } from "../PopularItems/PopularItems.styled";
function PopularItemsSection() {
    return (
        <div>
            <div style={{ position: "relative", top: "-90px" }}>
                <Header>Popular Items</Header>
                <Cards>
                    <PopularItems title='Istable' category='jewelery' />
                    <PopularItems title='Istable' category='jewelery' />
                    <PopularItems title='Istable' category='jewelery' />
                    <PopularItems title='Istable' category='jewelery' />
                    <PopularItems title='Istable' category='jewelery' />
                </Cards>
                <Line />
            </div>
        </div>
    );
}

export default PopularItemsSection;
