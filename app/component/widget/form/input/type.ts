
export interface tsInputOption {
    value?: string;
    label?: string;
}
export type tsInputOptions = tsInputOption[];

export interface tsInput {
    label?: string;
    type?: 'text' | 'textarea' | 'select' | 'file' | 'check';
    check_type?: 'radio';
    value?: string;
    placeholder?: string;
    files?: FileList | null;
    accept?: string;
    options?: tsInputOptions;
}

export interface tsInputs {
    [input_name: string]: tsInput;
}

export interface tsInputChangeObj {
    value?: string;
    files?: FileList | null;
    name: string;
}