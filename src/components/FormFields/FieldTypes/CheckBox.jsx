import React from "react";
import { Field, ErrorMessage } from "formik";

export const CheckBox = ({
    labelText,
    fieldName,
    labelClassName,
    wrapperClassName,
    errorMessageClassName,
    ...rest
}) => (
    <>
        <Field name={fieldName}>
            {({ field, form }) => (
                <div className={wrapperClassName}>
                    <input
                        type="checkbox"
                        id={fieldName}
                        {...rest}
                        checked={field?.value}
                        onChange={() => form.setFieldValue(fieldName, !field?.value)}
                    />
                    <label htmlFor={fieldName} className={labelClassName}>
                        {labelText}
                    </label>
                </div>
            )}
        </Field>
        <ErrorMessage component="span" name={fieldName} className={errorMessageClassName} />
    </>
);
