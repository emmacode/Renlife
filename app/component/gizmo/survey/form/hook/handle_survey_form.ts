import { tsInputChangeObj, tsInputs } from "@/app/component/widget/form/input/type";
import { setInputsOnInputChange } from "@/app/util/pre_def/func/forn";
import { useState } from "react";

export const useSurveyForm = () => {

    const [inputsA, setInputsA] = useState<tsInputs>({
        photo: {
            label: 'Upload your photo',
            placeholder: 'Your image goes here',
            type: 'file',
            accept: 'image/*',
        },
        gender: {
            label: 'Gender',
            placeholder: 'Select your gender',
            type: 'select',
            options: [
                {
                    value: 'female',
                    label: 'Female',
                },
                {
                    value: 'male',
                    label: 'Male',
                },
            ],
        },
        dob_day: {
            placeholder: 'Day',
            type: 'select',
        },
        dob_month: {
            placeholder: 'Month',
            type: 'select',
        },
        dob_year: {
            placeholder: 'Year',
            type: 'select',
        },
        delivery_mode: {
            label: 'Mode of delivery',
            placeholder: 'Select an option',
        },
        weight: {
            label: 'Weight',
            placeholder: 'Input weight',
        },
        family_history: {
            label: 'Family history',
            type: 'radio',
            options: [
                {
                    value: 'yes',
                    label: 'Yes',
                },
                {
                    value: 'no',
                    label: 'No',
                },
            ],
        },
        breast_feed: {
            label: 'Breast feed',
            type: 'radio',
            options: [
                {
                    value: 'yes',
                    label: 'Yes',
                },
                {
                    value: 'no',
                    label: 'No',
                },
            ],
        },
        bruising_during_birth: {
            label: 'Bruising during birth',
        },
        infection: {
            label: 'Infection',
        },
        poop_colour: {
            label: 'Poop Color (Please describe the color)',
            type: 'textarea',
            placeholder: 'Enter your description here.',
        },
    });

    const [inputsB, setInputsB] = useState<tsInputs>({
        
    });

    const setInput = (part: 'a' | 'b', input_obj: tsInputChangeObj) => {
        const inputName = input_obj.name;
        if(part === 'a' && inputName in inputsA){
            const inputs = setInputsOnInputChange(input_obj, inputsA);
            setInputsA({...inputs});
        }
        else if(part === 'b' && inputName in inputsB){
            const inputs = setInputsOnInputChange(input_obj, inputsB);
            setInputsB({...inputs});
        }
    }

    return {
        inputsA,
        inputsB,
        setInput,
    };
}