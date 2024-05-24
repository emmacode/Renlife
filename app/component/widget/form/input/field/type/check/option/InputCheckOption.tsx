import { tsInputOption } from "../../../../type";

interface tsLocal {
    option: tsInputOption;
    checked: boolean;
    onClick?: () => void;
}
const InputCheckOption = (props: tsLocal) => {
    return (
        <div className="w-[fit-content] flex items-center cursor-pointer" onClick={props.onClick}>
            <div className="bg-white w-[24px] h-[24px] p-[5px] border-[0.92px] border-greenB rounded-md">
                <div className={`${props.checked ? 'bg-blackA' : ''} w-full h-full rounded-full`}></div>
            </div>
            <div className="pl-2">
                {props.option.label || props.option.value}
            </div>
        </div>
    )
}

export default InputCheckOption;