import React from "react";
import {
    CardDescription,
    CardImage,
    CardLink,
    Cardinfo,
    DateAndTime,
    IconsTitles,
    ItemIcon,
    LocationCategoryDiv,
    ProductCard,
    ProductDetails,
    ProductTitle,
} from "./Card.styled";
import { useRouter } from "next/router";

function Card(props) {
    const { productImage, title, id, location, category, date, description } =
        props;
    const router = useRouter();

    function checkLang(checkME) {
        if (router.locale === "en") {
            return checkME?.name;
        } else return checkME?.name_ar;
    }

    function getMonthName(itemDate) {
        const dateIntoArray = itemDate?.split("/");

        const date = new Date();
        date.setMonth(dateIntoArray?.[1] - 1);

        return `${dateIntoArray?.[0]} ${date.toLocaleString("en-US", {
            month: "long",
        })} ${dateIntoArray?.[2]}`;
    }
    return (
        <CardLink href={`/Products/${id}`} key={id} data-aos='zoom-in'>
            <ProductCard>
                <CardImage
                    src={productImage}
                    alt='CardImage'
                    width={258.4}
                    height={185.44}
                />
                <ProductDetails>
                    <ProductTitle>
                        {title?.length > 20
                            ? `${title?.substring(0, 18)} ...`
                            : title}
                    </ProductTitle>
                    <LocationCategoryDiv>
                        <Cardinfo>
                            <ItemIcon
                                src='/images/Vector.svg'
                                alt='Icon'
                                width={14}
                                height={16}
                            />
                            <IconsTitles>{checkLang(location)}</IconsTitles>
                        </Cardinfo>
                        <Cardinfo>
                            <ItemIcon
                                src='/images/tag-fill.svg'
                                alt='Icon'
                                width={14}
                                height={17}
                            />
                            <IconsTitles>{checkLang(category)}</IconsTitles>
                        </Cardinfo>
                    </LocationCategoryDiv>
                    <DateAndTime>{getMonthName(date)}</DateAndTime>
                    <CardDescription>
                        {description?.length > 50
                            ? `${description.substring(0, 50)} ...`
                            : description}
                    </CardDescription>
                </ProductDetails>
            </ProductCard>
        </CardLink>
    );
}

export default Card;
