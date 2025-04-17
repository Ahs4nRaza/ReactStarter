import { Select } from 'antd';

const FilterSelect = ({
    label,
    value,
    defaultValue,
    options = [],
    onChange,
    placeholder = '',
    mode = null,
    width = 200,
    disabled = false,
    onFocus = () => { },
    showSearch = true,
    allowClear = true,
    notFoundContent = 'No options available',
    className = '',
    style = {}
}) => (
    <div className={className}>
        <div>
            {label && <label>{label}</label>}
            <Select
                showSearch={showSearch}
                allowClear={allowClear}
                mode={mode}
                value={value ?? (mode === 'multiple' ? [] : undefined)}
                defaultValue={defaultValue}
                style={{ width, ...style }}
                onChange={onChange}
                placeholder={placeholder}
                notFoundContent={notFoundContent}
                disabled={disabled}
                onFocus={onFocus}
            >
                {options.map(({ label, value, ...rest }) => (
                    <Select.Option key={value} value={value} {...rest}>
                        {label}
                    </Select.Option>
                ))}
            </Select>
        </div>
    </div>
);

export default FilterSelect;
