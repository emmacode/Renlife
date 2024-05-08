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

export type tsFormOutputFormat = 'json' | 'form_url';
export type tsFormOutput = string | FormData;

export const getInputsAsJsonOrFormData = async (inputs: tsInputs, format: tsFormOutputFormat = 'json'): Promise <tsFormOutput> => {
    //returns json (default) or raw form_url;

    let retData: string | FormData = '';

    const obj: {[x: string]: string} = {};
    const raw = new FormData();

    for (const name in inputs) {
        if (Object.prototype.hasOwnProperty.call(inputs, name)) {
            const input = inputs[name];
            const type = input.type;
            const value = input.value;
            const files = input.files;

            if(format === 'json'){
                if(type === 'file'){
                    //file, covert to base64;
                    const base64s: string[] = [];
                    if(files){
                        for(let b = 0; b < files.length; b++){
                            const file = files[b];
                            const xyz = await convertFileToBase64(file);
                            const base64: string = `${xyz}`;
                            base64s.push(base64);
                        }
                    }
                    obj[name] = JSON.stringify(base64s);
                }
                else {
                    //texts;
                    obj[name] = value || '';
                }
            }
            else {
                if(type === 'file'){
                    if(files){
                        for(let b = 0; b < files.length; b++){
                            const file = files[b];
                            raw.append(`${name}_${b}[]`, file);
                        }
                    }
                }
                else {
                    //text;
                    raw.append(`${name}`, `${input.value}`);
                }
            }
        }
    }

    retData = (
        format === 'json' ?
        JSON.stringify(obj)
        :
        raw
    );
    return retData;
}
export const convertFileToBase64 = (file: File) => {
    if(file){
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }
};