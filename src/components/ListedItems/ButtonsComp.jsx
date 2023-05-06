import Link from "next/link";
import { useTranslation, withTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import {
    AddItem,
    ButtonDetailDiv,
    ButtonIcon,
    ButtonName,
    ButtonsDiv,
    FilterButton,
    GreenButtonsDiv,
    InnerDiv,
    MenuItem,
    MenuItemDiv,
    MenuList,
} from "./ListedItems.styled";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";

const ButtonsComp = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const {
        checkLang,
        setDropDown,
        dropDown,
        locationList,
        sortRecent,
        setFilters,
        items,
    } = props;

    const { t } = useTranslation("common");
    function translateMe(word) {
        return t(word);
    }

    function itemlocation(location) {
        const filteredLocs = items?.filter((item) => {
            return item.location.id === location.id;
        });
        setFilters(filteredLocs);
    }

    useEffect(() => {
        const Listerner = onAuthStateChanged(auth, async (user) => {
            setIsAuthenticated(Boolean(user));
        });
        return () => {
            Listerner();
        };
    }, []);
    return (
        <ButtonsDiv>
            <GreenButtonsDiv>
                <FilterButton
                    onClick={() => setDropDown(!dropDown)}
                    onBlur={() => setDropDown(false)}
                >
                    <InnerDiv>
                        <ButtonName>{translateMe("Location")}</ButtonName>
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
                                                {checkLang(location)}
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
                        <ButtonName>{translateMe("Recent")}</ButtonName>

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
                {isAuthenticated && (
                    <Link href='/addToItem'>
                        <AddItem>{translateMe("Additem")}</AddItem>
                    </Link>
                )}
            </div>
        </ButtonsDiv>
    );
};

export default ButtonsComp;
