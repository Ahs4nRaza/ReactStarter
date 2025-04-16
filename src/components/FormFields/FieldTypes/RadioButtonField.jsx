import React from "react";
import { Field, ErrorMessage } from "formik";
import { Radio } from "antd";

const RadioGroup = Radio.Group;

export const RadioButtonField = ({
    labelText,
    fieldName,
    options = [],
    labelClassName,
    wrapperClassName,
    errorMessageClassName,
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
                    const { setFieldValue } = form;

                    return (
                        <RadioGroup
                            {...rest}
                            value={field.value || ""}
                            onChange={(e) => setFieldValue(fieldName, e.target.value)}
                        >
                            {options.length > 0 ? (
                                options.map((option) => (
                                    <Radio key={option.value} value={option.value}>
                                        {option.label}
                                    </Radio>
                                ))
                            ) : (
                                <Radio disabled>No options available</Radio>
                            )}
                        </RadioGroup>
                    );
                }}
            </Field>
            <ErrorMessage component="span" name={fieldName} className={errorMessageClassName} />
        </div>
    );
};
