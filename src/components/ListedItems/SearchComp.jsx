import { withTranslation } from "next-i18next";
import React from "react";

import { SearchDiv, SearchIcon, SearchInput } from "./ListedItems.styled";

const SearchComp = ({ handleInputChange, t }) => {
    return (
        <SearchDiv>
            <SearchInput
                type='text'
                onChange={(e) => handleInputChange(e)}
                placeholder={t("Searchplaceholder")}
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

export default withTranslation("common")(SearchComp);
