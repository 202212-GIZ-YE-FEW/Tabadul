import React from "react";
import Link from "next/link";
import {
    RelatedItemsContainer,
    RelatedItemCard,
    RelatedItemImage,
    RelatedItemDetails,
    RelatedItemTitle,
    RelatedItemLocation,
    RelatedItemDescription,
    Title,
} from "../../components/ProductPgage/product.style";

const RelatedItems = ({ relatedItems }) => {
    return (
        <RelatedItemsContainer>
            <Title>Related Items</Title>
            {relatedItems.map((item) => (
                <Link key={item.id} href={`/Products/${item.id}`}>
                    <div>
                        <RelatedItemCard>
                            <RelatedItemImage
                                src={item.image[0].url}
                                alt={item.title}
                                onError={(e) =>
                                    (e.target.src =
                                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png")
                                }
                            />
                            <RelatedItemDetails>
                                <RelatedItemTitle>
                                    {item.title}
                                </RelatedItemTitle>
                                <RelatedItemLocation>
                                    {item.location && item.location.name}
                                </RelatedItemLocation>
                                <RelatedItemDescription>
                                    {item.description}
                                </RelatedItemDescription>
                            </RelatedItemDetails>
                        </RelatedItemCard>
                    </div>
                </Link>
            ))}
        </RelatedItemsContainer>
    );
};

export default RelatedItems;
