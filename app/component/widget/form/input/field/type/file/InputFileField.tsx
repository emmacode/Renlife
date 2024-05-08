import Image from "next/image";
import { tsInput } from "../../../type";
import InputFieldPlaceholder from "../../placeholder/InputFieldPlaceholder";
import { useInputFileFieldChange } from "./hook/use_input_file_field_change";

interface tsLocal {
    input: tsInput;
    // className?: string;
    style_a?: boolean; //default = true;
    onChange?: (files?: FileList | null) => void;
}
const InputFileField = (props: tsLocal) => {
    const {valueNode, handleChange} = useInputFileFieldChange();

    return (
        <>
            {
                props.input.type === 'file' &&
                <>
                    <input
                        className={`
                            ${
                                props.style_a !== false ?
                                `hidden`
                                :
                                ``
                            }
                        `}
                        type="file"
                        onChange={e => {
                            props.onChange && props.onChange(handleChange(e));
                        }}
                    />
                    {
                        //custom placeholder;
                        props.style_a !== false &&
                        <div className="h-full flex flex-col align-center justify-center">
                            <div className="flex justify-center">
                                <Image
                                    className="w-[14px] object-contain"
                                    src="/image/vector/upload.png"
                                    alt=""
                                    width={0}
                                    height={0}
                                />
                            </div>
                            {
                                props.input.placeholder &&
                                <InputFieldPlaceholder
                                    className={`${valueNode ? '!text-blackA' : ''} mt-2`}
                                    placeholder={valueNode || props.input.placeholder}
                                />
                            }
                        </div>
                    }
                </>
            }
        </>
    )
}

export default InputFileField;