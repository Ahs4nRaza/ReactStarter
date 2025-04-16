

export const handleAntTableChange = (sorter, sortKeyMapping = [], updateSortFilter) => {
    if (sorter?.column) {
        const columnKey = sortKeyMapping[sorter?.column?.index];
        updateSortFilter(columnKey);
    } else {
        updateSortFilter(); // reset to default sorting
    }
};
