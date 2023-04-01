import React, { useEffect, useState } from "react";

import { items } from "./data.js";
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
    SwapButton,
    SwapDiv,
} from "./ListedItems.styled";
import SwapIcons from "./SwapIcons";

const ButtonsComp = (props) => {
    const {
        setFilter,
        setDropDown,
        dropDown,
        locationList,
        sortRecent,
        setHandleFilter,
    } = props;

    const [isRecent, setIsRecent] = useState(false);
    const [isAll, setIsAll] = useState(true);
    const [hitAll, setHitAll] = useState(false);
    const [hitLocation, setHitLocation] = useState(false);

    function recent() {
        setIsRecent(true);
        setIsAll(false);
    }

    function all() {
        setIsAll(true);
        setIsRecent(false);
        setHitAll((pre) => !pre);
    }

    useEffect(() => {
        if (isRecent) {
            setFilter(sortRecent);
        } else {
            setFilter(items);
        }
    }, [isRecent, isAll, hitAll, hitLocation]);

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
                                                setHitLocation((pre) => !pre);
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
                <SwapDiv>
                    <SwapButton
                        color={isAll ? null : "#33956d"}
                        font={isAll ? "#2e2f2f" : "white"}
                        onClick={recent}
                    >
                        <ButtonDetailDiv>Recent</ButtonDetailDiv>
                        <ButtonDetailDiv>
                            <SwapIcons type='Recent' />
                        </ButtonDetailDiv>
                    </SwapButton>
                    <SwapButton
                        color={isRecent ? null : "#33956d"}
                        font={isRecent ? "#2e2f2f" : "white"}
                        onClick={all}
                    >
                        <ButtonDetailDiv>All</ButtonDetailDiv>
                        <ButtonDetailDiv>
                            <SwapIcons type='All' />
                        </ButtonDetailDiv>
                    </SwapButton>
                </SwapDiv>
            </GreenButtonsDiv>
            <div>
                <AddItem>Add item</AddItem>
            </div>
        </ButtonsDiv>
    );
};

export default ButtonsComp;
