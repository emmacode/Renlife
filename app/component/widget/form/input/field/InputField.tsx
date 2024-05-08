import { tsInput } from "../type";
import InputFileField from "./file/InputFileField";
import { useInputField } from "./hook/use_input_field";
import InputTextField from "./text/InputTextField";

interface tsLocal {
    input: tsInput;
    className?: string;
    style_a?: boolean; //default = true;
}
const InputField = (props: tsLocal) => {
    const {className} = useInputField({
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
                />
            }
            {
                props.input.type === 'file' &&
                <InputFileField
                    input={props.input}
                    style_a={props.style_a}
                />
            }
        </div>
    )
}

export default InputField;