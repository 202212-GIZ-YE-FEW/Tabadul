import React from "react";

import {
    AddItem,
    ButtonDetailDiv,
    ButtonIcon,
    ButtonsDiv,
    FilterButton,
    GreenButtonsDiv,
    InnerDiv,
    MenuItem,
    MenuItemDiv,
    MenuList,
} from "./ListedItems.styled";
import Link from "next/link";

const ButtonsComp = (props) => {
    const {
        setDropDown,
        dropDown,
        locationList,
        sortRecent,
        setFilters,
        items,
    } = props;

    function itemlocation(location) {
        const filteredLocs = items?.filter((item) => {
            return item.location.id === location.id;
        });
        setFilters(filteredLocs);
    }
    return (
        <ButtonsDiv>
            <GreenButtonsDiv>
                <FilterButton
                    onClick={() => setDropDown(!dropDown)}
                    onBlur={() => setDropDown(false)}
                >
                    <InnerDiv>
                        <ButtonDetailDiv>Location</ButtonDetailDiv>
                        {dropDown && (
                            <MenuList>
                                {locationList?.map((location) => {
                                    return (
                                        <MenuItem
                                            key={location.id}
                                            onClick={() => {
                                                itemlocation(location);
                                            }}
                                        >
                                            <MenuItemDiv>
                                                {location.name}
                                            </MenuItemDiv>
                                        </MenuItem>
                                    );
                                })}
                            </MenuList>
                        )}
                        <ButtonDetailDiv>
                            <ButtonIcon
                                src='/SearchFilterIcons/Polygon.svg'
                                alt='icon'
                                width={21}
                                height={19}
                            />
                        </ButtonDetailDiv>
                    </InnerDiv>
                </FilterButton>
                <FilterButton onClick={sortRecent}>
                    <InnerDiv>
                        <ButtonDetailDiv>Recent</ButtonDetailDiv>

                        <ButtonDetailDiv>
                            <ButtonIcon
                                src='/SearchFilterIcons/Recent.svg'
                                alt='icon'
                                width={35}
                                height={25}
                            />
                        </ButtonDetailDiv>
                    </InnerDiv>
                </FilterButton>
            </GreenButtonsDiv>
            <div>
                <Link href='/addToItem'>
                    <AddItem>Add item</AddItem>
                </Link>
            </div>
        </ButtonsDiv>
    );
};

export default ButtonsComp;
