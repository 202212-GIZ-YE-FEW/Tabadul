import React, { useEffect, useState } from "react";
import { ShimmerPostList } from "react-shimmer-effects-18";

import { fetchLocations } from "@/utils/firebase";

import ButtonsComp from "./ButtonsComp";
import ItemsList from "./ItemsList";
import {
    ListedItemsDiv,
    SearchAndFilterDiv,
    ShimmerContainer,
} from "./ListedItems.styled";
import SearchComp from "./SearchComp";

const ListedItems = (props) => {
    const { setFilters, filters, setHandleFilter, handleFilter, items } = props;
    const [locationList, setLocationList] = useState();
    const [dropDown, setDropDown] = useState(false);

    function handleInputChange(e) {
        setHandleFilter(e.target.value);
    }

    function sortRecent() {
        const sortedItems = [...items];
        sortedItems.sort((a, b) => {
            const aTime = a.time.split(" ");
            const bTime = b.time.split(" ");
            return (
                b.date.localeCompare(a.date) || bTime[0].localeCompare(aTime[0])
            );
        });

        setFilters(sortedItems);
    }

    async function getLocations() {
        const locs = await fetchLocations();
        setLocationList(locs);
    }

    useEffect(() => {
        getLocations();
        if (handleFilter) {
            const filteredItems = items?.filter((item) => {
                return (
                    item.location.name
                        .toLowerCase()
                        .includes(handleFilter?.toLowerCase()) ||
                    item.category.name
                        .toLowerCase()
                        .includes(handleFilter?.toLowerCase()) ||
                    item.title
                        .toLowerCase()
                        .includes(handleFilter?.toLowerCase())
                );
            });
            setFilters(filteredItems);
        } else {
            setFilters(items);
        }
    }, [handleFilter]);

    return (
        <ListedItemsDiv>
            <SearchAndFilterDiv>
                <SearchComp
                    handleFilter={handleFilter}
                    handleInputChange={handleInputChange}
                />
                <ButtonsComp
                    setDropDown={setDropDown}
                    dropDown={dropDown}
                    locationList={locationList}
                    sortRecent={sortRecent}
                    setFilters={setFilters}
                    items={items}
                />
            </SearchAndFilterDiv>
            {filters?.length > 0 ? (
                <ItemsList filters={filters} />
            ) : (
                <ShimmerContainer>
                    <ShimmerPostList
                        postStyle='STYLE_FOUR'
                        col={4}
                        row={2}
                        gap={30}
                        rounded={true}
                    />
                </ShimmerContainer>
            )}
        </ListedItemsDiv>
    );
};

export default ListedItems;
