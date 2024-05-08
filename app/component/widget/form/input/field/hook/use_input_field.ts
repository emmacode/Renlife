import { tsInput, tsInputChangeObj } from "../../type";

interface tsHandleFieldChangeProps {
    value?: string;
    files?: FileList | null;
}
interface tsLocal {
    input_name: string;
    input_type?: tsInput['type'];
    style_a?: boolean; //default = true;
}

export const useInputField = (props?: tsLocal) => {
    const className = `
        ${
            props?.style_a !== false ?
            `
                mb-8 block mt-2 rounded-lg bg-white px-4 py-4
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

    const handleFieldChange = (obj?: tsHandleFieldChangeProps): tsInputChangeObj => {
        
        return {
            name: props?.input_name || '',
            value: obj?.value,
            files: obj?.files,
        };
    }

    return {
        className,
        handleFieldChange,
    };
}