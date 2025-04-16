import React from "react";
import { Field, ErrorMessage } from "formik";
import { Checkbox } from "antd";

const { Group: CheckboxGroup } = Checkbox;

export const CheckboxField = ({
    labelText,
    fieldName,
    checkboxOptions = [],
    labelClassName,
    optionWrapperClassName,
    wrapperClassName,
    errorMessageClassName,
    ...rest
}) => (
    <>
        <label className={labelClassName}>{labelText} :</label>
        <Field name={fieldName}>
            {({ field, form }) => {
                const { setFieldValue, setFieldTouched } = form;

                return (
                    <div className={wrapperClassName}>
                        <CheckboxGroup
                            {...rest}
                            value={field?.value || []}
                            onChange={(checkedValues) => setFieldValue(fieldName, checkedValues)}
                            onBlur={() => setFieldTouched(fieldName, true)}
                        >
                            {checkboxOptions.length ? (
                                checkboxOptions.map((option) => (
                                    <div className={optionWrapperClassName} key={option?.value}>
                                        <Checkbox value={option?.value}>{option?.label}</Checkbox>
                                    </div>
                                ))
                            ) : (
                                <span>No options available</span>
                            )}
                        </CheckboxGroup>
                    </div>
                );
            }}
        </Field>
        <ErrorMessage component="span" name={fieldName} className={errorMessageClassName} />
    </>
);
