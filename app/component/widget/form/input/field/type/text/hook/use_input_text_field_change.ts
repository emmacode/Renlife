import { ChangeEvent } from "react";
import { tsInput } from "../../../../type";

interface tsLocal {
    input_type?: tsInput['type'];
    style_a?: boolean; //default = true;
}
export const useInputTextFieldChange = (props?: tsLocal) => {
    const className = `
        ${
            props?.style_a !== false ?
            `
                bg-transparent text-[inherit] font-[inherit] border-none focus:outline-none w-full h-full resize-none
            `
            :
            ``
        }
    `;

    const handleChange = (e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string | undefined => {
        const value = e.currentTarget.value;
        
        return value;
    }

    return {
        className,
        handleChange,
    };
}