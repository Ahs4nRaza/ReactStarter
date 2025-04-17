import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import FilterSelect from '../FilterSelect/FilterSelect';
import { Button } from 'antd';  // Importing Ant Design Button

const FilterController = ({ config, clearFilters }) => {
    const { searchInput, filterSelect } = config;

    return (
        <div className="flex flex-wrap gap-4 items-center">
            {/* Render Search Input */}
            {searchInput?.required && (
                <SearchInput
                    value={searchInput.value}
                    onChange={searchInput.onChange}
                    placeholder={searchInput.placeholder}
                    width={searchInput.width}
                    allowClear={searchInput.allowClear}
                    icon={searchInput.icon}
                    className={searchInput.className}
                    style={searchInput.style}
                />
            )}

            {/* Render Filter Selects */}
            {filterSelect?.required && filterSelect.children.map((filter) => (
                <FilterSelect
                    key={filter.key}
                    label={filter.label}
                    value={filter.value}
                    defaultValue={filter.defaultValue}
                    options={filter.options}
                    onChange={filter.onChange}
                    placeholder={filter.placeholder}
                    mode={filter.mode}
                    width={filter.width}
                    disabled={filter.disabled}
                    allowClear={filter.allowClear}
                    showSearch={filter.showSearch}
                    notFoundContent={filter.notFoundContent}
                    onFocus={filter.onFocus}
                    className={filter.className}
                    style={filter.style}
                />
            ))}

            <Button
                type="primary"
                danger
                onClick={clearFilters}
                className="flex-shrink-0"
            >
                Clear Filters
            </Button>
        </div>
    );
};

export default FilterController;
