import React from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "antd";

const { Option } = Select;

export const SelectField = ({
    labelText,
    fieldName,
    options = [],
    placeholder = "Select an option",
    mode,
    labelClassName,
    wrapperClassName,
    errorMessageClassName,
    defaultValue = "",
    ...rest
}) => {
    return (
        <div className={wrapperClassName}>
            {labelText && (
                <label htmlFor={fieldName} className={labelClassName}>
                    {labelText}
                </label>
            )}
            <Field name={fieldName}>
                {({ field, form }) => {
                    const { setFieldValue, setFieldTouched } = form;

                    return (
                        <Select
                            {...rest}
                            placeholder={placeholder}
                            mode={mode}
                            value={field.value || defaultValue}
                            onChange={(value) => setFieldValue(fieldName, value)}
                            onBlur={() => setFieldTouched(fieldName, true)}
                            style={{ width: "100%" }}
                        >
                            {options.length > 0 ? (
                                options.map((option) => (
                                    <Option key={option.key} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))
                            ) : (
                                <Option disabled>No options available</Option>
                            )}
                        </Select>
                    );
                }}
            </Field>
            <ErrorMessage component="span" name={fieldName} className={errorMessageClassName} />
        </div>
    );
};
