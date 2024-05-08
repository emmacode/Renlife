import { tsInput } from "../type";

interface tsLocal {
    label?: tsInput['label'];
    className?: string;
    style_a?: boolean; //default = true;
}
const InputLabel = (props: tsLocal) => {
    return (
        <div className={`
                ${props.className || ''}
                ${
                    props.style_a !== false ?
                    ``
                    :
                    ''
                }
            `}
        >
            {props.label}
        </div>
    )
}

export default InputLabel;