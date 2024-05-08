import Image from "next/image";
import { tsInput } from "../../type";
import InputFieldPlaceholder from "./InputFieldPlaceholder";

interface tsLocal {
    placeholder: tsInput['placeholder'];
}
const InputFilePlaceholder = (props: tsLocal) => {
    return (
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
            <InputFieldPlaceholder
                className="mt-2"
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputFilePlaceholder;