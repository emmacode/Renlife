import { useState } from "react";
import { tsInput } from "../../../type";
import InputCheckOption from "./option/InputCheckOption";

interface tsLocal {
    input: tsInput;
    // className?: string;
    style_a?: boolean; //default = true;
    onChange?: (value?: string) => void;
}
const InputCheckField = (props: tsLocal) => {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {
                    props.input.options && props.input.options.map((option, a) => {
                        return (
                            <InputCheckOption
                                key={a}
                                option={option}
                                checked={selectedIndex === a}
                                onClick={() => {
                                    props.onChange && props.onChange(option.value);
                                    setSelectedIndex(a);
                                }}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default InputCheckField;