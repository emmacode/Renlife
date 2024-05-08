import Input from "@/app/component/widget/form/input/Input";
import { tsInputs } from "@/app/component/widget/form/input/type";

interface tsLocal {
    inputs: tsInputs;
}
const SurveyFormFields = (props: tsLocal) => {

    return (
        <div>
            {
                Object.entries(props.inputs).map(([name, input], a) => {
                    return (
                        <Input
                            key={a}
                            input={input}
                            name={name}
                        />
                    )
                })
            }
        </div>
    )
}

export default SurveyFormFields;