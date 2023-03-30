import React from "react";

import {
    CategoryImge,
    CategoryParagraph,
    ContainerBox,
    ContainerCategories,
} from "./Categories.styled";
import CategoriesImge from "../../assets/Image/icon_clothes_hanger_label_.svg";
import { CATEGORIES } from "../../../data/db";
function Categories({ setSelectedCategory }) {
    return (
        <ContainerBox>
            {CATEGORIES.map((category) => {
                return (
                    <ContainerCategories
                        key={category.id}
                        onClick={() => {
                            setSelectedCategory(category);
                        }}
                    >
                        <CategoryImge
                            src={CategoriesImge}
                            alt='icon_clothes_hanger_label_.svg'
                            width={86.28}
                            height={84.74}
                        />
                        <CategoryParagraph>{category}</CategoryParagraph>
                    </ContainerCategories>
                );
            })}
        </ContainerBox>
    );
}

export default Categories;
