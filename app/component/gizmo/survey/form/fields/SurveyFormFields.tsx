import Input from "@/app/component/widget/form/input/Input";
import { tsInputChangeObj, tsInputs } from "@/app/component/widget/form/input/type";

interface tsLocal {
    inputs: tsInputs;
    className?: string;
    onChange?: (obj: tsInputChangeObj) => void;
}
const SurveyFormFields = (props: tsLocal) => {

    return (
        <div className={`${props.className || ''}`}>
            {
                Object.entries(props.inputs).map(([name, input], a) => {
                    return (
                        <Input
                            key={a}
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