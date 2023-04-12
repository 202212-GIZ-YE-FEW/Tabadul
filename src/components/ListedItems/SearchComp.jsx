import React from "react";

import { SearchDiv, SearchIcon, SearchInput } from "./ListedItems.styled";

const SearchComp = ({ handleInputChange }) => {
    return (
        <SearchDiv>
            <SearchInput
                type='text'
                onChange={(e) => handleInputChange(e)}
                placeholder='Search'
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
