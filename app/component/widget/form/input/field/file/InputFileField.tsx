import Image from "next/image";
import { tsInput } from "../../type";

interface tsLocal {
    input: tsInput;
    // className?: string;
    style_a?: boolean; //default = true;
}
const InputFileField = (props: tsLocal) => {
    return (
        <>
            {
                props.input.type === 'file' &&
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
                />
            }
            {
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
                        <div className="text-center text-greenB mt-2">{props.input.placeholder}</div>
                    }
                </div>
            }
        </>
    )
}

export default InputFileField;