import SurveyFormTitle from "../title/SurveyFormTitle";
import SurveyForm from "./SurveryForm";

const SurveyFormBase = () => {

    return (
        <div className={`mt-32 bg-greenA p-6 pb-32 rounded-lg`}>
            <SurveyFormTitle />
            <SurveyForm />
        </div>
    )
}

export default SurveyFormBase;