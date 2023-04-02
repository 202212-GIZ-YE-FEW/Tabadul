import React, { useEffect, useState } from "react";

import ButtonsComp from "./ButtonsComp";
import ItemsList from "./ItemsList";
import { ListedItemsDiv, SearchAndFilterDiv } from "./ListedItems.styled";
import SearchComp from "./SearchComp";

const ListedItems = (props) => {
    const { setFilter, filter, setHandleFilter, handleFilter, items } = props;
    const [locationList, setLocationList] = useState();
    const [dropDown, setDropDown] = useState(false);

    function handleInputChange(e) {
        setHandleFilter(e.target.value);
    }

    function sortRecent() {
        const sortedItems = [...items];
        sortedItems.sort((a, b) => {
            return b.date.localeCompare(a.date) || b.time.localeCompare(a.time);
        });

        setFilter(sortedItems);
    }

    useEffect(() => {
        if (handleFilter) {
            const latestHandleFilter = handleFilter;
            const copyedItems = [...items];
            const filteredItems = copyedItems?.filter((item) => {
                return (
                    item.location
                        .toLowerCase()
                        .includes(latestHandleFilter?.toLowerCase()) ||
                    item.category
                        .toLowerCase()
                        .includes(latestHandleFilter?.toLowerCase())
                );
            });
            setFilter(filteredItems);
        } else {
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
                <SearchComp
                    handleFilter={handleFilter}
                    handleInputChange={handleInputChange}
                />
                <ButtonsComp
                    setDropDown={setDropDown}
                    dropDown={dropDown}
                    locationList={locationList}
                    setHandleFilter={setHandleFilter}
                    sortRecent={sortRecent}
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
