

export const updateFilterValue = (prevFilters, key, value) => {
    if (prevFilters[key] === value) {
        return prevFilters;
    }
    return {
        ...prevFilters,
        [key]: value,
    };
};


export const getUpdatedSortFilters = (prevFilters, clickedFieldKey = "id") => {
    let { sortOrder, sortKey } = prevFilters;

    if (sortKey === clickedFieldKey) {
        if (sortOrder === "asc") {
            sortOrder = "desc";
        } else if (sortOrder === "desc") {
            sortOrder = "";
        }
    } else {
        sortOrder = "asc";
        sortKey = clickedFieldKey;
    }

    if (!sortOrder) {
        sortOrder = "asc";
        sortKey = "id";
    }

    return { ...prevFilters, sortKey, sortOrder };
};
