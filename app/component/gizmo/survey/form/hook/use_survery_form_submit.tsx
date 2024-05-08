import { tsFormOutput } from "@/app/util/pre_def/func/form";
import { useCallApi } from "@/app/util/store/api/call";

// onSubmit: (form_output: tsFormOutput) => void;
export const useSurveyFormSubmit = () => {
    const {response, call} = useCallApi();

    const submit = (form_output: tsFormOutput) => {
        call({
            url: 'http://localhost/ping/',
            method: 'post',
            body: form_output,
        });
    }

    return {
        response,
        submit,
    };
}