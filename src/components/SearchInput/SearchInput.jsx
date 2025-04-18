import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDebounce } from '../../hooks/useDebounce';

const SearchInput = ({
    value = '',
    onChange,
    placeholder = '',
    width = 200,
    allowClear = true,
    icon = <SearchOutlined />,
    className = '',
    style = {},
    delay = 300,
    ...rest
}) => {
    const [inputValue, setInputValue] = useState(value);
    const debouncedValue = useDebounce(inputValue, delay);
    const skipNextOnChange = useRef(false);

    // Update input when external value changes
    useEffect(() => {
        if (value !== inputValue) {
            setInputValue(value);
            skipNextOnChange.current = true; // skip debounce after parent update
        }
    }, [value]);

    const handleOnChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const handleClear = useCallback(() => {
        setInputValue('');
    }, []);

    useEffect(() => {
        // Only call onChange if:
        // - input change is user-driven (not parent-driven)
        // - and value changed meaningfully
        if (skipNextOnChange.current) {
            skipNextOnChange.current = false;
            return;
        }

        if (debouncedValue !== value) {
            onChange?.(debouncedValue);
        }
    }, [debouncedValue, onChange, value]);

    return (
        <div className={className}>
            <Input
                {...rest}
                allowClear={allowClear}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleOnChange}
                onClear={handleClear}
                prefix={icon}
                style={{ width, ...style }}
            />
        </div>
    );
};

export default React.memo(SearchInput);
