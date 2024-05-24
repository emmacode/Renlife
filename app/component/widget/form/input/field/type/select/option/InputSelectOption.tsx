import { tsInputOption } from "../../../../type";

interface tsLocal {
    option: tsInputOption;
    checked: boolean;
    onClick?: () => void;
}
const InputSelectOption = (props: tsLocal) => {
    return (
        <div className={`${props.checked ? 'bg-blackA text-white' : 'bg-white text-blackA hover:bg-greyB'} p-4 transitionA`} onClick={props.onClick}>
            {props.option.label || props.option.value}
        </div>
    )
}

export default InputSelectOption;