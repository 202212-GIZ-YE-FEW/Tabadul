import Link from "next/link";
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
import { useRouter } from "next/router";

const ButtonsComp = (props) => {
    const router = useRouter();
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
                        <ButtonName>
                            {router.locale === "ar" ? "الموقع" : "Location"}
                        </ButtonName>
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
                        <ButtonName>
                            {router.locale === "ar" ? "الأخير" : "Recent"}
                        </ButtonName>

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
                        <AddItem>
                            {router.locale === "ar" ? "إضافة منتج" : "Add item"}
                        </AddItem>
                    </Link>
                )}
            </div>
        </ButtonsDiv>
    );
};

export default ButtonsComp;
