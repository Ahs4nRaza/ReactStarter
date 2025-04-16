import React from "react";
import { Input } from "antd";
import { Field, ErrorMessage } from "formik";

const { TextArea } = Input;

export const TextAreaField = ({
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
                    <TextArea
                        {...field}
                        {...rest}
                        value={field?.value || ""}
                        onChange={(e) => form.setFieldValue(fieldName, e?.target?.value)}
                        onBlur={() => form.setFieldTouched(fieldName, true)}
                    />
                )}
            </Field>
            <ErrorMessage component="span" name={fieldName} className={errorMessageClassName} />
        </div>
    );
};
