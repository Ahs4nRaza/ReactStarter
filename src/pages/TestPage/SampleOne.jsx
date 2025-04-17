import React, { useState, useEffect } from 'react';
import FilterController from '../../components/FilterController/FilterController';
import { SearchOutlined } from '@ant-design/icons';
import { useDebounce } from '../../hooks/useDebounce';
import { useBreadcrumb } from '../../hooks/useBreadcrumbs';
import RoutePaths from "../../routes/routePath"

const TestPage = () => {
    useBreadcrumb({
        parent: {
            label: "Test Page",
            url: RoutePaths.MAIN
        },
        child: {
            label: "Sample Test Page",
        }
    });

    const [filters, setFilters] = useState({
        search: '',
        status: 'active',
        role: []
    });

    // Debounce the search value with a delay of 500ms (or any delay you prefer)
    const debouncedSearch = useDebounce(filters.search, 5000);

    const handleSearchChange = (e) => {
        setFilters(prev => ({ ...prev, search: e.target.value }));
    };

    const handleFilterChange = (key) => (value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setFilters({
            search: '',
            status: 'active',
            role: []
        });
    };

    const config = {
        searchInput: {
            required: true,
            placeholder: 'Search...',
            value: filters.search,
            onChange: handleSearchChange,
            width: 200,
            allowClear: true,
            icon: <SearchOutlined />,
            className: '',
            style: {},
            delay: 5000
        },
        filterSelect: {
            required: true,
            children: [
                {
                    key: 'status',
                    label: 'Status',
                    value: filters.status,
                    defaultValue: 'active',
                    mode: null,
                    options: [
                        { label: 'Active', value: 'active' },
                        { label: 'Inactive', value: 'inactive' }
                    ],
                    placeholder: 'Select status',
                    width: 200,
                    disabled: false,
                    allowClear: true,
                    showSearch: true,
                    notFoundContent: 'No options',
                    onChange: handleFilterChange('status'),
                    onFocus: () => { },
                    className: '',
                    style: {}
                },
                {
                    key: 'role',
                    label: 'Role',
                    value: filters.role,
                    defaultValue: [],
                    mode: 'multiple',
                    options: [
                        { label: 'Admin', value: 'admin' },
                        { label: 'Editor', value: 'editor' }
                    ],
                    placeholder: 'Select roles',
                    allowClear: true,
                    showSearch: true,
                    onChange: handleFilterChange('role'),
                    onFocus: () => { },
                    className: '',
                    style: {}
                }
            ]
        }
    };

    // Use the debounced value for any API calls or side-effects
    // (for example, when debouncedSearch changes, make an API request)
    useEffect(() => {
        if (debouncedSearch) {
            console.log('Debounced Search:', debouncedSearch);
            // Trigger any side-effects or API calls here
        }
    }, [debouncedSearch]);

    return (
        <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Filter Controller Demo</h2>
            <FilterController config={config} clearFilters={clearFilters} />
            <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(filters, null, 2)}</pre>
        </div>
    );
};

export default TestPage;
