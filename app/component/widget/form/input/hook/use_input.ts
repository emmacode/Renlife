import { useState } from "react";
import { tsInput } from "../type";

interface tsLocal {
    input_type?: tsInput['type'];
    style_a?: boolean; //default = true;
}

export const useInput = (props?: tsLocal) => {
    const [parentClickKey, setParentClickKey] = useState<string | undefined>(undefined);

    const className = `
        ${
            props?.style_a !== false ?
            `
                mb-8 relative block
                ${
                    [undefined, 'text'].includes(props?.input_type) ? '' :
                    'cursor-pointer'
                }
            `
            :
            ``
        }
    `;

    return {
        className,
        parentClickKey,
        setParentClickKey,
    };
}