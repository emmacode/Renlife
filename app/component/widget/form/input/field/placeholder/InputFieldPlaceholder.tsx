import { ReactNode } from "react";

interface tsLocal {
    placeholder: ReactNode;
    className?: string;
}
const InputFieldPlaceholder = (props: tsLocal) => {

    return (
        <div className={`${props.className || ''} text-center text-greenB`}>
            {props.placeholder}
        </div>
    )
}

export default InputFieldPlaceholder;