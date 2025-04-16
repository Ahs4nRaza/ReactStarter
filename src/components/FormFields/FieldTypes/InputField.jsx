import React from "react";
import { Field, ErrorMessage } from "formik";
import { Input } from "antd";

export const InputField = ({
    labelText,
    fieldName,
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
                {({ field, form }) => (
                    <Input
                        id={fieldName}
                        {...field}
                        {...rest}
                        onChange={(e) => form.setFieldValue(fieldName, e?.target?.value)}
                        onBlur={() => form.setFieldTouched(fieldName, true)}
                    />
                )}
            </Field>
            <ErrorMessage component="span" name={fieldName} className={errorMessageClassName} />
        </div>
    );
};
