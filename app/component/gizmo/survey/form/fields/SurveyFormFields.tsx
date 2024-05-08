import Input from "@/app/component/widget/form/input/Input";
import { tsInputChangeObj, tsInputs } from "@/app/component/widget/form/input/type";

interface tsLocal {
    inputs: tsInputs;
    className?: string;
    style_a?: boolean;
    onChange?: (obj: tsInputChangeObj) => void;
}
const SurveyFormFields = (props: tsLocal) => {

    return (
        <div className={`${props.className || ''}`}>
            {
                Object.entries(props.inputs).map(([name, input], a) => {
                    return (
                        <Input
                            key={`${a}_${input.pseudo_key || ''}`}
                            className={`
                                ${
                                    props.style_a ?
                                    `${a === 0 ? 'max-w-[80px]' : 'max-w-[120px]'} ${a > 0 ? 'ml-4' : ''} w-full` :
                                    ''
                                }
                            `}
                            input={input}
                            name={name}
                            onChange={props.onChange}
                        />
                    )
                })
            }
        </div>
    )
}

export default SurveyFormFields;