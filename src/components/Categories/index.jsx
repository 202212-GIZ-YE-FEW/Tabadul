import Image from "next/image";
import React from "react";

import {
    CategoryParagraph,
    Container,
    ContainerCategories,
} from "./Categories.styled";
import CategoriesImge from "../../assets/Image/icon_clothes_hanger_label_.svg";
function Categories() {
    return (
        <Container>
            <ContainerCategories>
                <Image
                    src={CategoriesImge}
                    alt='icon_clothes_hanger_label_.svg'
                    width={86.28}
                    height={84.74}
                />
                <CategoryParagraph>Category</CategoryParagraph>
            </ContainerCategories>
        </Container>
    );
}

export default Categories;
