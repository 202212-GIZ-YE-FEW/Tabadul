import React, { useEffect, useState } from "react";

import {
    CategoryImge,
    CategoryParagraph,
    ContainerBox,
    ContainerCategories,
    ShimmerBox,
} from "./Categories.styled";
import CategoriesImag from "../../assets/Image/icon_clothes_hanger_label_.svg";
import { fetchCategories } from "@/utils/firebase";

function Categories({ handleCategory }) {
    const [categoriesList, setCategoriesList] = useState();

    async function getCategories() {
        const cat = await fetchCategories();
        setCategoriesList(cat);
    }

    function checkLang(category) {
        if (document.querySelector("html").lang === "en") {
            return category?.name;
        } else return category?.name_ar;
    }

    useEffect(() => {
        getCategories();
        checkLang();
    }, []);

    return (
        <ContainerBox>
            {categoriesList?.length > 0 ? (
                categoriesList?.map((category) => {
                    return (
                        <ContainerCategories
                            key={category.id}
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
                            <CategoryParagraph>
                                {checkLang(category)}
                            </CategoryParagraph>
                        </ContainerCategories>
                    );
                })
            ) : (
                <>
                    <ShimmerBox height={250} width={240} rounded={true} />
                    <ShimmerBox height={250} width={240} rounded />
                    <ShimmerBox height={250} width={240} rounded />
                    <ShimmerBox height={250} width={240} rounded />
                    <ShimmerBox height={250} width={240} rounded />
                </>
            )}
        </ContainerBox>
    );
}

export default Categories;
