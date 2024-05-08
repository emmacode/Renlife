import InputLabel from "@/app/component/widget/form/input/label/InputLabel";
import SurveyFormFields from "./fields/SurveyFormFields";
import { useSurveyForm } from "./hook/handle_survey_form";

const SurveyForm = () => {
    const {inputsA1, inputsA2, inputsA3, inputsB, setInput} = useSurveyForm();

    return (
        <div className="mt-16 text-[12px]">
            <SurveyFormFields
                inputs={inputsA1}
                onChange={(obj) => {
                    setInput('a1', obj);
                }}
            />
            <div>
                <InputLabel
                    label="Date of birth"
                />
                <SurveyFormFields
                    className="flex justify-between"
                    inputs={inputsA2}
                    onChange={(obj) => {
                        setInput('a2', obj);
                    }}
                />
            </div>
            <SurveyFormFields
                inputs={inputsA3}
                onChange={(obj) => {
                    setInput('a3', obj);
                }}
            />
            {/* <SurveyFormFields
                inputs={inputsB}
            /> */}
        </div>
    )
}

export default SurveyForm;