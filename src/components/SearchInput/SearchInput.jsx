import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchInput = ({
    value,
    onChange,
    placeholder = '',
    width = 200,
    allowClear = true,
    icon = <SearchOutlined />,
    className = '',
    style = {}
}) => {
    return (
        <div className={className}>
            <Input
                allowClear={allowClear}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                prefix={icon}
                style={{ width, ...style }}
            />
        </div>
    );
};

export default SearchInput;
