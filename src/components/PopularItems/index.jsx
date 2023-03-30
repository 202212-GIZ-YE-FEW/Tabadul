import React from "react";

import {
    Card,
    Cardcontainer,
    CardHeader,
    Cardimg,
    Cardinfo,
    CardParagraph,
    Cards,
    Header,
    Icon,
    Line,
    LocationTitle,
} from "./PopularItems.styled";

function PopularItems() {
    return (
        <div style={{ position: "relative", top: "-90px" }}>
            <Header>Popular Items</Header>
            <Cards>
                <Card>
                    <Cardimg
                        src='/images/Cardimg.svg'
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
                            <LocationTitle>Istanbol</LocationTitle>
                        </Cardinfo>
                        <CardHeader>Clothes</CardHeader>
                        <CardParagraph>
                            Short description for the available item{" "}
                        </CardParagraph>
                    </Cardcontainer>
                </Card>

                <Card>
                    <Cardimg
                        src='/images/Cardimg.svg'
                        alt='CardImage'
                        width={258.4}
                        height={185.44}
                    />
                    <Cardinfo>
                        <Icon
                            src='/images/Vector.svg'
                            alt='Icon'
                            width={17.77}
                            height={22.61}
                        />
                        <LocationTitle>Istanbol</LocationTitle>
                    </Cardinfo>
                    <CardHeader>Clothes</CardHeader>
                    <CardParagraph>
                        Short description for the available item{" "}
                    </CardParagraph>
                </Card>

                <Card>
                    <Cardimg
                        src='/images/Cardimg.svg'
                        alt='CardImage'
                        width={258.4}
                        height={185.44}
                    />
                    <Cardinfo>
                        <Icon
                            src='/images/Vector.svg'
                            alt='Icon'
                            width={17.77}
                            height={22.61}
                        />
                        <LocationTitle>Istanbol</LocationTitle>
                    </Cardinfo>
                    <CardHeader>Clothes</CardHeader>
                    <CardParagraph>
                        Short description for the available item{" "}
                    </CardParagraph>
                </Card>

                <Card>
                    <Cardimg
                        src='/images/Cardimg.svg'
                        alt='CardImage'
                        width={258.4}
                        height={185.44}
                    />
                    <Cardinfo>
                        <Icon
                            src='/images/Vector.svg'
                            alt='Icon'
                            width={17.77}
                            height={22.61}
                        />
                        <LocationTitle>Istanbol</LocationTitle>
                    </Cardinfo>
                    <CardHeader>Clothes</CardHeader>
                    <CardParagraph>
                        Short description for the available item{" "}
                    </CardParagraph>
                </Card>

                <Card>
                    <Cardimg
                        src='/images/Cardimg.svg'
                        alt='CardImage'
                        width={258.4}
                        height={185.44}
                    />
                    <Cardinfo>
                        <Icon
                            src='/images/Vector.svg'
                            alt='Icon'
                            width={17.77}
                            height={22.61}
                        />
                        <LocationTitle>Istanbol</LocationTitle>
                    </Cardinfo>
                    <CardHeader>Clothes</CardHeader>
                    <CardParagraph>
                        Short description for the available item{" "}
                    </CardParagraph>
                </Card>
            </Cards>
            <Line />
        </div>
    );
}

export default PopularItems;
