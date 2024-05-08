import SurveyFormFields from "./fields/SurveyFormFields";
import { useSurveyForm } from "./hook/handle_survey_form";

const SurveyForm = () => {
    const {inputsA, inputsB, setInput} = useSurveyForm();

    return (
        <div className="mt-16">
            <SurveyFormFields
                inputs={inputsA}
            />
            {/* <SurveyFormFields
                inputs={inputsB}
            /> */}
        </div>
    )
}

export default SurveyForm;