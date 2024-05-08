import { tsInput } from "../../type";

interface tsLocal {
    input: tsInput;
    className?: string;
    style_a?: boolean; //default = true;
}
const InputTextField = (props: tsLocal) => {
    const className = `
        ${
            props.style_a !== false ?
            `
                bg-transparent text-[inherit] font-[inherit] border-none focus:outline-none w-full h-full resize-none
            `
            :
            ``
        }
    `;

    return (
        <>
            {
                [undefined, 'text'].includes(props.input.type) &&
                <input
                    className={className}
                    placeholder={props.input.placeholder}
                />
            }
            {
                props.input.type === 'textarea' &&
                <textarea
                    className={className}
                    placeholder={props.input.placeholder}
                ></textarea>
            }
        </>
    )
}

export default InputTextField;