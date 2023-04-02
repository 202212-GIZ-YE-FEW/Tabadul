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

const ButtonsComp = (props) => {
    const { setDropDown, dropDown, locationList, sortRecent, setHandleFilter } =
        props;

    return (
        <ButtonsDiv>
            <GreenButtonsDiv>
                <FilterButton onClick={() => setDropDown(!dropDown)}>
                    <InnerDiv>
                        <ButtonDetailDiv>Location</ButtonDetailDiv>
                        {dropDown && (
                            <MenuList>
                                {locationList.map((location, index) => {
                                    return (
                                        <MenuItem
                                            key={index}
                                            onClick={() => {
                                                setHandleFilter(location);
                                            }}
                                        >
                                            <MenuItemDiv>
                                                {location}
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
                <AddItem>Add item</AddItem>
            </div>
        </ButtonsDiv>
    );
};

export default ButtonsComp;
