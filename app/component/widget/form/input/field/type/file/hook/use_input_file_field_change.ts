import { ChangeEvent, ReactNode, useState } from "react";

export const useInputFileFieldChange = () => {
    const [valueNode, setValueNode] = useState<ReactNode>(undefined);

    const handleChange = (e:  ChangeEvent<HTMLInputElement>): FileList | null => {
        const files = e.currentTarget.files;
        let names = '';

        if(files){
            for(let a = 0; a < files.length; a++){
                const file = files[a];
                const name = file.name;
                names += `${names.length ? ', ' : ''}${name}`;
            }
        }

        if(names){
            setValueNode(names);
        }
        else {
            setValueNode(undefined);
        }
        
        return files;
    }

    return {
        valueNode,
        handleChange,
    };
}