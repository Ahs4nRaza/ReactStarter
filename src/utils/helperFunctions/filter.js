import { scrollToTop } from "./misc";

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

export const handleClearFilters = (filters, clearSearch = false) => {
    scrollToTop();

    const filterKeysToPreserve = ["sortKey", "sortOrder", "search"];

    const defaultFilters = Object.keys(filters).reduce((acc, filterKey) => {
        if (filterKeysToPreserve.includes(filterKey)) {
            if (filterKey === "sortKey") {
                acc[filterKey] = filters[filterKey] || "id";
            } else if (filterKey === "sortOrder") {
                acc[filterKey] = filters[filterKey] || "asc";
            } else if (filterKey === "search") {
                acc[filterKey] = clearSearch ? "" : filters[filterKey];
            }
        } else {
            if (Array.isArray(filters[filterKey])) {
                acc[filterKey] = [];
            } else {
                acc[filterKey] = "";
            }
        }
        return acc;
    }, {});

    return defaultFilters;
};


