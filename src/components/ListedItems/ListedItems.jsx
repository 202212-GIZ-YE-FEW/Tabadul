import React, { useEffect, useState } from "react";

import ButtonsComp from "./ButtonsComp";
import { items } from "./data.js";
import ItemsList from "./ItemsList";
import { ListedItemsDiv, SearchAndFilterDiv } from "./ListedItems.styled";
import SearchComp from "./SearchComp";

const ListedItems = () => {
    const [filter, setFilter] = useState();
    const [handleFilter, setHandleFilter] = useState();
    const [locationList, setLocationList] = useState();
    const [dropDown, setDropDown] = useState(false);
    const [sortItems, setSort] = useState(false);

    function handleInputChange(e) {
        setHandleFilter(e.target.value);
    }

    function sortRecent() {
        const sortedItems = [...items];
        sortedItems.sort((a, b) => {
            return b.date.localeCompare(a.date) || b.time.localeCompare(a.time);
        });
        return sortedItems;
    }

    useEffect(() => {
        if (handleFilter) {
            const copyedItems = [...items];
            const filteredItems = copyedItems?.filter((item) => {
                return (
                    item.location
                        .toLowerCase()
                        .includes(handleFilter?.toLowerCase()) ||
                    item.category
                        .toLowerCase()
                        .includes(handleFilter?.toLowerCase())
                );
            });
            console.log("filteredItems", filteredItems);
            setFilter(filteredItems);
        } else {
            console.log("all items");
            setFilter(items);
        }

        const location = items.map((item) => {
            return item.location;
        });
        setLocationList([...new Set(location)]);
    }, [handleFilter]);

    return (
        <ListedItemsDiv>
            <SearchAndFilterDiv>
                <SearchComp handleInputChange={handleInputChange} />
                <ButtonsComp
                    setDropDown={setDropDown}
                    dropDown={dropDown}
                    locationList={locationList}
                    setHandleFilter={setHandleFilter}
                    setSort={setSort}
                    sortItems={sortItems}
                    sortRecent={sortRecent}
                    setFilter={setFilter}
                    items={items}
                />
            </SearchAndFilterDiv>
            {filter?.length > 0 ? (
                <ItemsList filter={filter} />
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
