import React from "react";

import PopularItems from "../PopularItems";
import { Cards, Header, Line } from "../PopularItems/PopularItems.styled";
import photoImg from "../../../public/images/Cardimg.svg";
function PopularItemsSection() {
    return (
        <div>
            <div style={{ position: "relative", top: "-90px" }}>
                <Header>Popular Items</Header>
                <Cards>
                    <PopularItems
                        title='Istable'
                        category='jewelery'
                        photo={photoImg}
                    />
                    <PopularItems
                        title='Istable'
                        category='jewelery'
                        photo={photoImg}
                    />
                    <PopularItems
                        title='Istable'
                        category='jewelery'
                        photo={photoImg}
                    />
                    <PopularItems
                        title='Istable'
                        category='jewelery'
                        photo={photoImg}
                    />
                    <PopularItems
                        title='Istable'
                        category='jewelery'
                        photo={photoImg}
                    />
                </Cards>
                <Line />
            </div>
        </div>
    );
}

export default PopularItemsSection;
