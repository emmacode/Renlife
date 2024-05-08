import { tsInput } from "../type";

interface tsLocal {
    input_type?: tsInput['type'];
    style_a?: boolean; //default = true;
}

export const useInput = (props?: tsLocal) => {
    const className = `
        ${
            props?.style_a !== false ?
            `
                text-[12px] mb-8 block
            `
            :
            ``
        }
    `;

    return {
        className,
    };
}