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
                block mt-2 rounded-lg py-4
                ${props?.input_type === 'textarea' ? 'h-[100px]' : ''}
                ${props?.input_type === 'check' ? '' : 'px-4 bg-white'}
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