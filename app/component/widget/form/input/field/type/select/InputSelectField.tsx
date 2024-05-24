import Image from "next/image";
import { RefObject } from "react";
import { tsInput } from "../../../type";
import InputFieldPlaceholder from "../../placeholder/InputFieldPlaceholder";
import { useInputSelectField } from "./hook/use_input_select_field";
import InputSelectOptions from "./option/InputSelectOptions";

interface tsLocal {
    parent_ref?: RefObject<HTMLLabelElement>;
    input: tsInput;
    // className?: string;
    style_a?: boolean; //default = true;
    parentClickKey?: string;
    onChange?: (value?: string) => void;
}
const InputSelectField = (props: tsLocal) => {
    const {
        openOptions, valueNode,
        setOpenOptions, setValueNode,
    } = useInputSelectField({
        parent_click_key: props.parentClickKey,
        parent_ref: props.parent_ref,
    });

    return (
        <>
            <div className="h-full flex items-center justify-between"
                onClick={() => {
                    setOpenOptions(true);
                }}
            >
                <InputFieldPlaceholder
                    className={`${valueNode ? `!text-blackA` : '!text-greyB'} pr-2`}
                    placeholder={valueNode || props.input.placeholder}
                />
                <Image
                    className="w-auto h-[14px] object-contain"
                    src="/image/vector/chevron_expand_grey.png"
                    alt=""
                    width={0}
                    height={0}
                />
            </div>
            {
                props.input.options &&
                <InputSelectOptions
                    options={props.input.options}
                    open={openOptions}
                    onClose={() => {
                        setOpenOptions(false);
                    }}
                    onChange={(option) => {
                        props.onChange && props.onChange(option.value);
                        setValueNode(option.label || option.value);
                    }}
                />
            }
        </>
    )
}

export default InputSelectField;