import { useState } from "react";
import { tsInputOption, tsInputOptions } from "../../../../type";
import InputSelectOption from "./InputSelectOption";

interface tsLocal {
    options: tsInputOptions;
    open: boolean;
    onChange?: (option: tsInputOption) => void;
    onClose?: () => void;
}
const InputSelectOptions = (props: tsLocal) => {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

    return (
        <>
            <div className={`
                    absolute z-[1] w-[fit-content] left-0 top-full transitionA rounded-md overflow-hidden
                    ${props.open ? 'mt-2' : 'h-0'}
                `}
                onMouseLeave={props.onClose}
            >
                <div className="max-h-[200px] overflow-y-auto hide_scrollbar overscroll-contain">
                    {
                        props.options.map((option, a) => {
                            return (
                                <InputSelectOption
                                    key={a}
                                    option={option}
                                    checked={selectedIndex === a}
                                    onClick={() => {
                                        props.onClose && props.onClose();
                                        props.onChange && props.onChange(option);
                                        setSelectedIndex(a);
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default InputSelectOptions;