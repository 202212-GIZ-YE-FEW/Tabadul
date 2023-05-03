import React from "react";

import { SearchDiv, SearchIcon, SearchInput } from "./ListedItems.styled";
import { useRouter } from "next/router";

const SearchComp = ({ handleInputChange }) => {
    const router = useRouter();

    return (
        <SearchDiv>
            <SearchInput
                type='text'
                onChange={(e) => handleInputChange(e)}
                placeholder={router.locale === "ar" ? "البحث" : "Search"}
            />
            <SearchIcon
                src='/SearchFilterIcons/Search.svg'
                alt='Search Icon'
                width={25}
                height={35}
            />
        </SearchDiv>
    );
};

export default SearchComp;
