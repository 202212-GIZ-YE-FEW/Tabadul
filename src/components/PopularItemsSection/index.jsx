import { withTranslation } from "next-i18next";
import React from "react";

import { CardLink } from "../ListedItems/ListedItems.styled";
import PopularItems from "../PopularItems";
import { Cards, Header, Line } from "../PopularItems/PopularItems.styled";

function PopularItemsSection({ items, t }) {
    return (
        <div>
            <div style={{ position: "relative", top: "-90px" }}>
                <Header>{t("PopularItems")}</Header>
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

export default withTranslation("common")(PopularItemsSection);
