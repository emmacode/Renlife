import InputField from "./field/InputField";
import { useInput } from "./hook/use_input";
import InputLabel from "./label/InputLabel";
import { tsInput, tsInputChangeObj } from "./type";

interface tsLocal {
    input: tsInput;
    name: string;
    className?: string;
    style_a?: boolean; //default = true;
    onChange?: (obj: tsInputChangeObj) => void;
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
                input_name={props.name}
                style_a={props.style_a}
                onChange={props.onChange}
            />
        </label>
    )
}

export default Input;