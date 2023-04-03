import React, { useEffect, useState } from "react";

import {
    CategoryImge,
    CategoryParagraph,
    ContainerBox,
    ContainerCategories,
} from "./Categories.styled";
import { items } from "../ListedItems/data";
import CategoriesImag from "../../assets/Image/icon_clothes_hanger_label_.svg";

function Categories({ handleCategory }) {
    const [categoriesList, setCategoriesList] = useState();

    useEffect(() => {
        const itemsCategories = items?.map((item) => {
            return item.category;
        });
        setCategoriesList(["ALL", ...new Set(itemsCategories)]);
    }, categoriesList);

    return (
        <ContainerBox>
            {categoriesList?.map((category) => {
                return (
                    <ContainerCategories
                        key={category}
                        onClick={() => {
                            handleCategory(category);
                        }}
                    >
                        <CategoryImge
                            src={CategoriesImag}
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
