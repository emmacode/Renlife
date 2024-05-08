import Button from "@/app/component/widget/button/Button";
import InputLabel from "@/app/component/widget/form/input/label/InputLabel";
import { useEffect } from "react";
import SurveyFormFields from "./fields/SurveyFormFields";
import { useSurveyFormSubmit } from "./hook/use_survery_form_submit";
import { useSurveyForm } from "./hook/use_survey_form";

interface tsLocal {
    onSuccess: () => void;
}
const SurveyForm = (props: tsLocal) => {
    const {inputsA1, inputsA2, inputsA3, inputsB, setInput, processInputs} = useSurveyForm();
    const {response, submit} = useSurveyFormSubmit();
    const isError = response?.loading === false && (response.successful === false || response?.error?.text);

    const handleSubmit = async () => {
        const output = await processInputs();
        submit(output);
    }
    useEffect(() => {
        if(response?.successful){
            props.onSuccess();
        }
    }, [response?.successful]);

    return (
        <div className="mt-8 md:mt-16 text-[12px] md:flex">
            <div className="md:w-[50%] md:pr-12">
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
                        className="flex"
                        inputs={inputsA2}
                        style_a
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
            </div>
            <div className="md:w-[50%] md:pl-12">
                <SurveyFormFields
                    inputs={inputsB}
                    onChange={(obj) => {
                        setInput('b', obj);
                    }}
                />
                <div>
                    <div className={`
                            text-center text-redA transitionA
                            ${
                                isError ?
                                `opacity-1 my-2` :
                                `opacity-0 mt-0 h-0 overflow-hidden`
                            }
                        `}
                    >
                        {response?.error?.text || 'could not submit survey'}
                    </div>
                    <Button
                        loading={response?.loading}
                        disabled={response?.loading}
                        onClick={handleSubmit}
                    >
                        submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SurveyForm;