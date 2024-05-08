import { tsInputChangeObj, tsInputOption, tsInputOptions, tsInputs } from "@/app/component/widget/form/input/type";
import { getInputsAsJsonOrFormData, setInputsOnInputChange, tsFormOutput } from "@/app/util/pre_def/func/form";
import { __month_list } from "@/app/util/pre_def/time/month";
import { useEffect, useState } from "react";

const yesNoOptions: tsInputOptions = [
    {
        value: 'yes',
        label: 'Yes',
    },
    {
        value: 'no',
        label: 'No',
    },
];
const yrOptions: tsInputOptions = []
for(let a = 0; a <= 100; a++){
    const year = 2024 - a;
    yrOptions.push({
        value: `${year}`,
    });
}

export const useSurveyForm = () => {
    const [inputsA1, setInputsA1] = useState<tsInputs>({
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
    });
    const [inputsA2, setInputsA2] = useState<tsInputs>({
        dob_day: {
            placeholder: 'Day',
            type: 'select',
        },
        dob_month: {
            placeholder: 'Month',
            type: 'select',
            options: [
                ...(
                    __month_list.map((month) => {
                        const option: tsInputOption = {
                            value: month,
                            label: <span className="capitalize">{month}</span>,
                        };

                        return option;
                    })
                )
            ],
        },
        dob_year: {
            placeholder: 'Year',
            type: 'select',
            options: yrOptions,
        },
    });

    const [inputsA3, setInputsA3] = useState<tsInputs>({
        delivery_mode: {
            label: 'Mode of delivery',
            placeholder: 'Select an option',
            type: 'select',
            options: [],
        },
        weight: {
            label: 'Weight',
            placeholder: 'Input weight',
        },
        family_history: {
            label: 'Family History',
            type: 'check',
            check_type: 'radio',
            options: yesNoOptions,
        },
        breast_feed: {
            label: 'Breast feed',
            placeholder: 'Select an option',
            type: 'select',
            options: [],
        },
        bruising_during_birth: {
            label: 'Bruising during birth',
            type: 'check',
            check_type: 'radio',
            options: yesNoOptions,
        },
        infection: {
            label: 'Infection',
            type: 'check',
            check_type: 'radio',
            options: yesNoOptions,
        },
    });

    const [inputsB, setInputsB] = useState<tsInputs>({
        gesticulation_period: {
            label: 'Gesticulation Period',
            placeholder: 'Select an option',
            type: 'select',
            options: [],
        },
        scelera: {
            label: 'Scelera (The white part of the eyes), is it white?',
            type: 'check',
            check_type: 'radio',
            options: yesNoOptions,
        },
        skin_colour: {
            label: 'Skin Color (What region has it gotten to?)',
            placeholder: 'Select an option',
            type: 'select',
            options: [],
        },
        poop_colour: {
            label: 'Poop Color (Please describe the color)',
            type: 'textarea',
            placeholder: 'Enter your description here.',
        },
        temperature: {
            label: 'Temperature',
            placeholder: 'Input temperature',
        },
    });

    useEffect(() => {
        const newInputs = {...inputsA2};
        const mon = inputsA2.dob_month.value || '';
        let dayLim = 31;

        if(mon === 'february'){
            dayLim = 29;
        }
        else if(['april', 'june', 'september', 'november',].includes(mon)){
            dayLim = 30;
        }

        const dyOptions: tsInputOptions = []
        for(let a = 1; a <= dayLim; a++){
            dyOptions.push({
                value: `${a}`,
            });
        }

        if(parseInt(newInputs.dob_day.value || '') > dayLim){
            newInputs.dob_day.value = undefined;
            newInputs.dob_day.pseudo_key = mon;
        }
        newInputs.dob_day.options = dyOptions;

        setInputsA2({...newInputs});
    }, [inputsA2.dob_month.value]);

    const setInput = (part: 'a1' | 'a2' | 'a3' | 'b', input_obj: tsInputChangeObj) => {
        const inputName = input_obj.name;
        if(part === 'a1' && inputName in inputsA1){
            const inputs = setInputsOnInputChange(input_obj, inputsA1);
            setInputsA1({...inputs});
        }
        else if(part === 'a2' && inputName in inputsA2){
            const inputs = setInputsOnInputChange(input_obj, inputsA2);
            setInputsA2({...inputs});
        }
        else if(part === 'a3' && inputName in inputsA3){
            const inputs = setInputsOnInputChange(input_obj, inputsA3);
            setInputsA3({...inputs});
        }
        else if(part === 'b' && inputName in inputsB){
            const inputs = setInputsOnInputChange(input_obj, inputsB);
            setInputsB({...inputs});
        }
    }
    const processInputs = async (): Promise<tsFormOutput> => {
        const inputs = {
            ...inputsA1,
            ...inputsA2,
            ...inputsA3,
            ...inputsB,
        };

        const processedInputs = await getInputsAsJsonOrFormData(inputs, 'json');
        console.log(processedInputs);

        return processedInputs;
    }

    return {
        inputsA1,
        inputsA2,
        inputsA3,
        inputsB,
        setInput,
        processInputs,
    };
}