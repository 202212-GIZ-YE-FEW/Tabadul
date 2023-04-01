import React from "react";

import {
    CategoryImge,
    CategoryParagraph,
    ContainerBox,
    ContainerCategories,
} from "./Categories.styled";
import { CATEGORIES } from "../../../data/db";
function Categories({ handleCategory }) {
    return (
        <ContainerBox>
            {CATEGORIES.map((category) => {
                return (
                    <ContainerCategories
                        key={category}
                        onClick={() => {
                            handleCategory(category.name);
                        }}
                    >
                        <CategoryImge
                            src={category.Image}
                            alt='icon_clothes_hanger_label_.svg'
                            width={86.28}
                            height={84.74}
                        />
                        <CategoryParagraph>{category.name}</CategoryParagraph>
                    </ContainerCategories>
                );
            })}
        </ContainerBox>
    );
}

export default Categories;
