import React from "react";

import {
    CardImage,
    CardLink,
    Cardinfo,
    DateAndTime,
    IconsTitles,
    ItemCard,
    ItemIcon,
    ItemTitle,
    ItemsListDiv,
    LocationCategoryDiv,
} from "./ListedItems.styled";
import { CardParagraph } from "../PopularItems/PopularItems.styled";

const ItemsList = ({ filters }) => {
    return (
        <ItemsListDiv>
            {filters?.map((item) => {
                return (
                    <CardLink href={`Products/${item.id}`} key={item.id}>
                        <ItemCard>
                            <CardImage
                                src={item.image[0].url}
                                alt='CardImage'
                                width={258.4}
                                height={185.44}
                            />
                            <ItemTitle>
                                {item.title?.length > 20
                                    ? `${item.title?.substring(0, 20)} ...`
                                    : item.title}
                            </ItemTitle>

                            <LocationCategoryDiv>
                                <Cardinfo>
                                    <ItemIcon
                                        src='/images/Vector.svg'
                                        alt='Icon'
                                        width={14}
                                        height={16}
                                    />
                                    <IconsTitles>
                                        {item.location.name}
                                    </IconsTitles>
                                </Cardinfo>
                                <Cardinfo>
                                    <ItemIcon
                                        src='/images/tag-fill.svg'
                                        alt='Icon'
                                        width={14}
                                        height={17}
                                    />
                                    <IconsTitles>
                                        {item.category.name}
                                    </IconsTitles>
                                </Cardinfo>
                            </LocationCategoryDiv>

                            <DateAndTime>
                                {item.date} {item.time}
                            </DateAndTime>

                            <CardParagraph>
                                {item.description?.length > 50
                                    ? `${item.description.substring(0, 50)} ...`
                                    : item.description}
                            </CardParagraph>
                        </ItemCard>
                    </CardLink>
                );
            })}
        </ItemsListDiv>
    );
};

export default ItemsList;
