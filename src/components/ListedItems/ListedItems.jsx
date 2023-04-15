import React, { useEffect, useState } from "react";

import ButtonsComp from "./ButtonsComp";
import ItemsList from "./ItemsList";
import { ListedItemsDiv, SearchAndFilterDiv } from "./ListedItems.styled";
import SearchComp from "./SearchComp";
import { fetchLocations } from "@/utils/firebase";

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
                <p
                    style={{
                        marginTop: "200px",
                        marginBottom: "100px",
                        fontSize: "20px",
                    }}
                >
                    There&#39;re no matching items{" "}
                </p>
            )}
        </ListedItemsDiv>
    );
};

export default ListedItems;
