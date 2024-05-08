import { ChangeEvent } from "react";

export const useInputFileFieldChange = () => {

    const handleChange = (e:  ChangeEvent<HTMLInputElement>): FileList | null => {
        const files = e.currentTarget.files;
        
        return files;
    }

    return {
        handleChange,
    };
}