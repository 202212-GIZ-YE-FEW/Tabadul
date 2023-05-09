import Link from "next/link";
import { withTranslation } from "next-i18next";
import React from "react";

import {
    RelatedItemsContainer,
    Title,
    ProductsBox,
} from "../../components/ProductPgage/product.style";
import Card from "../Card/Card";

const RelatedItems = ({ relatedItems, t }) => {
    return (
        <RelatedItemsContainer>
            <Title>{t("RelatedItems")}</Title>
            <ProductsBox>
                {relatedItems?.slice(0, 4).map((item) => (
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
                ))}
            </ProductsBox>
        </RelatedItemsContainer>
    );
};

export default withTranslation("common")(RelatedItems);
