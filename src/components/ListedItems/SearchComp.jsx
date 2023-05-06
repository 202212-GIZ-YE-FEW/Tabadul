import { useTranslation, withTranslation } from "next-i18next";
import React from "react";

import { SearchDiv, SearchIcon, SearchInput } from "./ListedItems.styled";

const SearchComp = ({ handleInputChange }) => {
    const { t } = useTranslation("common");
    function translateMe(word) {
        return t(word);
    }
    return (
        <SearchDiv>
            <SearchInput
                type='text'
                onChange={(e) => handleInputChange(e)}
                placeholder={translateMe("Searchplaceholder")}
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
