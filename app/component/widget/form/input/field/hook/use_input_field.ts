import { tsInput } from "../../type";

interface tsLocal {
    input_type?: tsInput['type'];
    style_a?: boolean; //default = true;
}

export const useInputField = (props?: tsLocal) => {
    const className = `
        ${
            props?.style_a !== false ?
            `
                text-[12px] mb-8 block mt-2 rounded-lg bg-white px-4 py-4
                ${props?.input_type === 'textarea' ? 'h-[100px]' : ''}
                ${
                    props?.input_type === 'file' ?
                    `h-[120px]`
                    :
                    ''
                }
            `
            :
            ``
        }
    `;

    return {
        className,
    };
}