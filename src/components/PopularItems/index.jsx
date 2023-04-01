import React from "react";

import {
    Card,
    Cardcontainer,
    CardHeader,
    Cardimg,
    Cardinfo,
    CardParagraph,
    Icon,
    LocationTitle,
} from "./PopularItems.styled";

function PopularItems({ category, location, photo }) {
    return (
        <Card>
            <Cardimg
                src={photo}
                alt='CardImage'
                width={258.4}
                height={185.44}
            />
            <Cardcontainer>
                <Cardinfo>
                    <Icon
                        src='/images/Vector.svg'
                        alt='Icon'
                        width={17.77}
                        height={22.61}
                    />
                    <LocationTitle>{location}</LocationTitle>
                </Cardinfo>
                <CardHeader>{category}</CardHeader>
                <CardParagraph>
                    Short description for the available item{" "}
                </CardParagraph>
            </Cardcontainer>
        </Card>
    );
}

export default PopularItems;
