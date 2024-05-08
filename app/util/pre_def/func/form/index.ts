import { tsInputChangeObj, tsInputs } from "@/app/component/widget/form/input/type";

export const setInputsOnInputChange = (input_obj: tsInputChangeObj, inputs: tsInputs): tsInputs => {
    const inputName = input_obj.name;
    inputs[inputName] = {
        ...inputs[inputName],
        value: input_obj.value,
        files: input_obj.files,
    };
    
    return inputs;
}