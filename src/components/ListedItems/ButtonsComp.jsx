import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

import { auth } from "@/utils/firebase";

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

const ButtonsComp = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const {
        setDropDown,
        dropDown,
        locationList,
        sortRecent,
        setFilters,
        items,
        t,
    } = props;

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
                        <ButtonName>{t("Location")}</ButtonName>
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
                        <ButtonName>{t("Recent")}</ButtonName>

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
                        <AddItem>{t("Additem")}</AddItem>
                    </Link>
                )}
            </div>
        </ButtonsDiv>
    );
};

export default withTranslation("common")(ButtonsComp);
