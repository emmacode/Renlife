import AppBrandName from "../../widget/app/AppBrandName";
import Wrapperstic from "../../widget/wrapper/Wrapperstic";
import SurveyFormBase from "./form/SurveyFormBase";

const SurveyBase = () => {

    return (
        <div className="min-h-screen bg-whiteA pt-10 font-familyA">
            <Wrapperstic className="md:!max-w-[870px]">
                <AppBrandName className="mx-auto" />
                <SurveyFormBase />
            </Wrapperstic>
        </div>
    )
}

export default SurveyBase;