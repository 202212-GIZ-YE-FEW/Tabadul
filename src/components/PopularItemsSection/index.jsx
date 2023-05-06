import { useTranslation, withTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import { CardLink } from "../ListedItems/ListedItems.styled";
import { Cards, Header, Line } from "../PopularItems/PopularItems.styled";
import Card from "../Card/Card";

function PopularItemsSection({ items }) {
    const { t } = useTranslation("common");
    function translateMe(word) {
        return t(word);
    }
    const [width, setWidth] = useState(1791);

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
    return (
        <div>
            <div style={{ position: "relative", top: "-90px" }}>
                <Header>{translateMe("PopularItems")}</Header>
                <Cards>
                    {items?.slice(0, limitProductsNumber()).map((item) => {
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
                </Cards>
                <Line />
            </div>
        </div>
    );
}

export default PopularItemsSection;
