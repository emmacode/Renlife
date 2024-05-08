import InputField from "./field/InputField";
import { useInput } from "./hook/use_input";
import InputLabel from "./label/InputLabel";
import { tsInput } from "./type";

interface tsLocal {
    input: tsInput;
    name: string;
    className?: string;
    style_a?: boolean; //default = true;
}
const Input = (props: tsLocal) => {
    const {className} = useInput({
        input_type: props.input.type,
        style_a: props.style_a,
    });

    return (
        <label className={`${props.className || ''} ${className}`}>
            {
                props.input.label &&
                <InputLabel
                    label={props.input.label}
                    style_a={props.style_a}
                />
            }
            <InputField
                input={props.input}
                style_a={props.style_a}
            />
        </label>
    )
}

export default Input;