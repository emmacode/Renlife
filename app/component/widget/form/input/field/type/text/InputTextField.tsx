
import { tsInput } from "../../../type";
import { useInputTextFieldChange } from "./hook/use_input_text_field_change";

interface tsLocal {
    input: tsInput;
    className?: string;
    style_a?: boolean; //default = true;
    onChange?: (value?: string) => void;
}
const InputTextField = (props: tsLocal) => {
    const {className, handleChange} = useInputTextFieldChange();

    return (
        <>
            {
                [undefined, 'text'].includes(props.input.type) &&
                <input
                    className={className}
                    placeholder={props.input.placeholder}
                    onChange={(e) => {
                        props.onChange && props.onChange(handleChange(e));
                    }}
                />
            }
            {
                props.input.type === 'textarea' &&
                <textarea
                    className={className}
                    placeholder={props.input.placeholder}
                    onChange={(e) => {
                        props.onChange && props.onChange(handleChange(e));
                    }}
                ></textarea>
            }
        </>
    )
}

export default InputTextField;