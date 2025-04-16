import * as FormFieldComponents from './index';
import { FORM_CONTROL_TYPES } from "../../utils/constants";

const FormFieldController = ({ fieldType, ...rest }) => {
    const componentMap = {
        [FORM_CONTROL_TYPES.INPUT]: FormFieldComponents.InputField,
        [FORM_CONTROL_TYPES.SELECT]: FormFieldComponents.SelectField,
        [FORM_CONTROL_TYPES.TEXTAREA]: FormFieldComponents.TextAreaField,
        [FORM_CONTROL_TYPES.DATE_PICKER]: FormFieldComponents.DatePickerField,
        [FORM_CONTROL_TYPES.CHECKBOX_GROUP]: FormFieldComponents.CheckboxField,
        [FORM_CONTROL_TYPES.CHECKBOX_SINGLE]: FormFieldComponents.CheckBox,
        [FORM_CONTROL_TYPES.RADIO_GROUP]: FormFieldComponents.RadioButtonField,
    };

    const SelectedFieldComponent = componentMap[fieldType];

    if (!SelectedFieldComponent) {
        console.error(`Unknown form field type: "${fieldType}"`);
        return <span>Invalid field type: "{fieldType}"</span>;
    }

    return <SelectedFieldComponent {...rest} />;
};

export default FormFieldController;
