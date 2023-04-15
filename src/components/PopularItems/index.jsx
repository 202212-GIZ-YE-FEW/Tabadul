import React from "react";

import {
    Card,
    Cardcontainer,
    CardHeader,
    Cardimg,
    Cardinfo,
    CardParagraph,
    Icon,
    Lo_Ca_Div,
    LocationTitle,
    ProductTitle,
} from "./PopularItems.styled";
import { DateAndTime } from "../ListedItems/ListedItems.styled";

function PopularItems({ category, location, photo, description, title, date }) {
    return (
        <Card>
            <Cardimg
                src={photo}
                alt='CardImage'
                width={258.4}
                height={185.44}
            />
            <Cardcontainer>
                <ProductTitle>
                    {title?.length > 50
                        ? `${title.substring(0, 50)} ...`
                        : title}
                </ProductTitle>
                <Lo_Ca_Div>
                    <Cardinfo>
                        <Icon
                            src='/images/Vector.svg'
                            alt='Icon'
                            width={17.77}
                            height={20.61}
                        />
                        <LocationTitle>{location}</LocationTitle>
                    </Cardinfo>
                    <Cardinfo>
                        <Icon
                            src='/images/tag-fill.svg'
                            alt='Icon'
                            width={14}
                            height={20}
                        />
                        <LocationTitle>{category}</LocationTitle>
                    </Cardinfo>
                </Lo_Ca_Div>
                <DateAndTime>{date}</DateAndTime>
                <CardParagraph>
                    {description?.length > 50
                        ? `${description.substring(0, 50)} ...`
                        : description}
                </CardParagraph>
            </Cardcontainer>
        </Card>
    );
}

export default PopularItems;
