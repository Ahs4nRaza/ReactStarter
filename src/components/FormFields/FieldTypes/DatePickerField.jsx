import React from "react";
import { DatePicker as AntDatePicker } from "antd";
import { Field, ErrorMessage } from "formik";
import { DEFAULT_DATE_FORMAT } from "../../utils/constants";
import moment from "moment";

export const DatePickerField = ({
    labelText,
    fieldName,
    labelClassName,
    wrapperClassName,
    errorMessageClassName,
    format = DEFAULT_DATE_FORMAT,
    ...rest
}) => {

    const disabledDate = (current) => current && current < moment().startOf("day");

    return (
        <div className={wrapperClassName}>
            {labelText && (
                <label htmlFor={fieldName} className={labelClassName}>
                    {labelText}
                </label>
            )}
            <Field name={fieldName}>
                {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;

                    return (
                        <AntDatePicker
                            id={fieldName}
                            format={format}
                            value={value ? moment(value, format, true) : null}
                            onChange={(date) =>
                                setFieldValue(fieldName, date ? date.format(format) : null)
                            }
                            disabledDate={disabledDate}
                            {...rest}
                        />
                    );
                }}
            </Field>
            <ErrorMessage component="span" name={fieldName} className={errorMessageClassName} />
        </div>
    );
};
