import Overlay from "@/app/component/widget/overlay/Overlay";
import { useState } from "react";
import SurveyFormTitle from "../title/SurveyFormTitle";
import SurveyForm from "./SurveryForm";

const SurveyFormBase = () => {
    const [formKey, resetFormKey] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <>
            <div className={`mt-12 md:mt-24 bg-greenA p-6 pb-32 rounded-lg`}>
                <SurveyFormTitle />
                <SurveyForm
                    key={formKey}
                    onSuccess={() => {
                        resetFormKey(`${Date.now()}`);
                        setShowOverlay(true);
                    }}
                />
            </div>
            {
                showOverlay &&
                <Overlay
                    title="Thank you!"
                    text="Your response has been successfully submitted."
                    onClose={() => {
                        setShowOverlay(false);
                    }}
                />
            }
        </>
    )
}

export default SurveyFormBase;