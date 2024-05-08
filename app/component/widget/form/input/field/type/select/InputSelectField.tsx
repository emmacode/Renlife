import Image from "next/image";
import { tsInput } from "../../../type";
import InputFieldPlaceholder from "../../placeholder/InputFieldPlaceholder";

interface tsLocal {
    input: tsInput;
    // className?: string;
    style_a?: boolean; //default = true;
    onChange?: (value?: string) => void;
}
const InputSelectField = (props: tsLocal) => {

    return (
        <>
            <div className="h-full flex items-center justify-between">
                {
                    props.input.placeholder &&
                    <InputFieldPlaceholder
                        placeholder={props.input.placeholder}
                    />
                }
                <Image
                    className="w-auto h-[14px] object-contain"
                    src="/image/vector/chevron_expand_grey.png"
                    alt=""
                    width={0}
                    height={0}
                />
            </div>
        </>
    )
}

export default InputSelectField;