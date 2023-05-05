import React, { useEffect, useState } from "react";

import { Cards, Header, Line } from "../PopularItems/PopularItems.styled";
import Card from "../Card/Card";
import { ShimmerDiv, ShimmerItem } from "../Card/Card.styled";
import { ShimmerPostItem } from "react-shimmer-effects-18";

function PopularItemsSection({ items }) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        let cb = function () {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", cb);

        return () => {
            window.removeEventListener("resize", cb);
        };
    }, []);

    function limitProductsNumber() {
        if (width > 1791) {
            return 5;
        }
        if (width < 1300) {
            return 3;
        } else if (width >= 1300) {
            return 4;
        }
    }

    function shimmerCreator(n) {
        let shimmerArray = [];
        for (let i = 0; i < n; i++) {
            shimmerArray.push(
                <ShimmerItem>
                    <ShimmerPostItem card title text cta />
                </ShimmerItem>
            );
        }
        return shimmerArray;
    }
    return (
        <div>
            <div style={{ position: "relative", top: "-90px" }}>
                <Header>Popular Items</Header>
                <Cards>
                    {items?.length > 0 ? (
                        items?.slice(0, limitProductsNumber()).map((item) => {
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
                        })
                    ) : (
                        <ShimmerDiv>
                            {shimmerCreator(limitProductsNumber())}
                        </ShimmerDiv>
                    )}
                </Cards>
                <Line />
            </div>
        </div>
    );
}

export default PopularItemsSection;
