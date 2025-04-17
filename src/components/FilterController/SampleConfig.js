import { SearchOutlined } from '@ant-design/icons';

const filterConfig = {
    // =====================
    // SEARCH INPUT SETTINGS
    // =====================
    searchInput: {
        required: true,                      // Whether to render SearchInput
        placeholder: 'Search...',            // Placeholder text
        value: '',                           // Controlled value
        onChange: () => { },                 // Change handler 
        width: 200,                          // Width in pixels
        allowClear: true,                    // Enable clear icon
        icon: <SearchOutlined />,            // Optional prefix icon
        className: '',                       // Optional custom class
        style: {}                            // Optional inline styles
    },

    // =====================
    // FILTER SELECT SETTINGS
    // =====================
    filterSelect: {
        required: true,                      // Whether to render FilterSelects
        children: [
            {
                key: 'status',                   // Unique identifier
                label: 'Status',                 // Label text
                value: 'active',                 // Controlled value
                defaultValue: 'active',          // Default (for uncontrolled)
                mode: null,                      // 'multiple' or null
                options: [
                    { label: 'Active', value: 'active' },
                    { label: 'Inactive', value: 'inactive' },
                ],
                placeholder: 'Select status',    // Placeholder text
                width: 200,                      // Width in pixels
                disabled: false,                 // Disable the select
                allowClear: true,                // Enable clear option
                showSearch: true,                // Enable search inside dropdown
                notFoundContent: 'No options',   // Fallback when no options
                onChange: () => { },         // Value change handler
                onFocus: () => { },               // Focus event handler
                className: '',                   // Optional custom class
                style: {}                        // Optional inline styles
            }
        ]
    }
};

export default filterConfig;
