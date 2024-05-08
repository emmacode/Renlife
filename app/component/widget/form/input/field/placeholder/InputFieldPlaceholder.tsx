import { ReactNode } from "react";

interface tsLocal {
    placeholder?: ReactNode;
}
const InputFieldPlaceholder = (props: tsLocal) => {

    return (
        <div className="text-center text-greenB">
            {props.placeholder}
        </div>
    )
}

export default InputFieldPlaceholder;