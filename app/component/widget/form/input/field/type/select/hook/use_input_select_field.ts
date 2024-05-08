import { ReactNode, useEffect, useState } from "react";

interface tsLocal {
    parent_click_key?: string;
}

export const useInputSelectField = (props?: tsLocal) => {
    const [openOptions, setOpenOptions] = useState(false);
    const [valueNode, setValueNode] = useState<ReactNode>(undefined);

    useEffect(() => {
        //when the label element is clicked,
        //open the options;
        if(props?.parent_click_key){
            setOpenOptions(true);
        }
    }, [props?.parent_click_key]);

    return {
        openOptions,
        valueNode,
        setOpenOptions,
        setValueNode,
    };
}