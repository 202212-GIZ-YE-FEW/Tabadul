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
                        title='Istanbul'
                        category='jewelery'
                        photo={photoImg}
                    />
                    <PopularItems
                        title='Taiz'
                        category='electronics'
                        photo={photoImg}
                    />
                    <PopularItems
                        title="Sana'a"
                        category='jewelery'
                        photo={photoImg}
                    />
                    <PopularItems
                        title='Paris'
                        category="men's clothing"
                        photo={photoImg}
                    />
                    <PopularItems
                        title='London'
                        category="women's clothing"
                        photo={photoImg}
                    />
                </Cards>
                <Line />
            </div>
        </div>
    );
}

export default PopularItemsSection;
