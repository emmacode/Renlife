import { RefObject } from "react";
import { tsInput, tsInputChangeObj } from "../type";
import { useInputField } from "./hook/use_input_field";
import InputCheckField from "./type/check/InputCheckField";
import InputFileField from "./type/file/InputFileField";
import InputSelectField from "./type/select/InputSelectField";
import InputTextField from "./type/text/InputTextField";

interface tsLocal {
    parent_ref?: RefObject<HTMLLabelElement>;
    input: tsInput;
    input_name: string;
    className?: string;
    style_a?: boolean; //default = true;
    parentClickKey?: string;
    onChange?: (obj: tsInputChangeObj) => void;
}
const InputField = (props: tsLocal) => {
    const {className, handleFieldChange} = useInputField({
        input_name: props.input_name,
        input_type: props.input.type,
        style_a: props.style_a,
    });

    return (
        <div className={`${props.className || ''} ${className}`}>
            {
                [undefined, 'text', 'textarea'].includes(props.input.type) &&
                <InputTextField
                    input={props.input}
                    style_a={props.style_a}
                    onChange={(value) => {
                        props.onChange && props.onChange(handleFieldChange({
                            value,
                        }));
                    }}
                />
            }
            {
                props.input.type === 'file' &&
                <InputFileField
                    input={props.input}
                    style_a={props.style_a}
                    onChange={(files) => {
                        props.onChange && props.onChange(handleFieldChange({
                            files,
                        }));
                    }}
                />
            }
            {
                props.input.type === 'select' &&
                <InputSelectField
                    parent_ref={props.parent_ref}
                    input={props.input}
                    style_a={props.style_a}
                    parentClickKey={props.parentClickKey}
                    onChange={(value) => {
                        props.onChange && props.onChange(handleFieldChange({
                            value,
                        }));
                    }}
                />
            }
            {
                props.input.type === 'check' &&
                <InputCheckField
                    input={props.input}
                    style_a={props.style_a}
                    onChange={(value) => {
                        props.onChange && props.onChange(handleFieldChange({
                            value,
                        }));
                    }}
                />
            }
        </div>
    )
}

export default InputField;