import { ReactNode, RefObject, useCallback, useEffect, useState } from "react";

interface tsLocal {
    parent_click_key?: string;
    parent_ref?: RefObject<HTMLLabelElement>;
}

export const useInputSelectField = (props?: tsLocal) => {
    const [openOptions, setOpenOptions] = useState(false);
    const [valueNode, setValueNode] = useState<ReactNode>(undefined);

    const checkClick = useCallback((e: any) => {
        const parent = props?.parent_ref?.current;

        const arbitraryNode = e.target;
        if(parent){
            //since parent exist;
            if(!parent.contains(arbitraryNode)){
                setOpenOptions(false);
            }
        }
    }, []);

    useEffect(() => {
        //when the label element is clicked,
        //open the options;
        if(props?.parent_click_key){
            setOpenOptions(true);
        }
    }, [props?.parent_click_key]);
    useEffect(() => {
        if(openOptions){
            // console.log('to be added');
            //add event listener;
            document.addEventListener('click', checkClick);
        }
        else {
            // console.log('to be removed');
            //remove listener;
            document.removeEventListener('click', checkClick);
        }
    }, [openOptions]);

    return {
        openOptions,
        valueNode,
        setOpenOptions,
        setValueNode,
    };
}