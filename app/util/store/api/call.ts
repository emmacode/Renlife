import { useState } from "react";
import { tsFormOutput } from "../../pre_def/func/form";

export interface tsCallProps {
    url: string;
    method?: 'post' | 'get';
    body: tsFormOutput;
}

export interface tsCallResponseError {
    text?: string;
    other?: any;
}
export interface tsCallResponse {
    data?: any;
    successful?: boolean;
    loading?: boolean;
    error?: tsCallResponseError;
}

export const useCallApi = () => {
    const [response, setResponse] = useState<tsCallResponse | undefined>(undefined);

    const call = (call_props: tsCallProps) => {
        setResponse({
            loading: true,
        });

        fetch(call_props.url, {
            method: call_props.method,
            body: call_props.body,
        })
        .then(response => response.text())
        .then((resp) => {
            const newResponse: tsCallResponse = {};
            newResponse.loading = false;
            
            try{
                const extApiResp = JSON.parse(resp);

                //try changing the success logic response here;
                //assuming the api returns a success-boolean value;
                const successful = extApiResp.successful;
                const data = extApiResp.data;
                const error = extApiResp.error;

                newResponse.successful = successful;

                if(successful){
                    newResponse.data = data;
                }
                else {
                    newResponse.error = {
                        text: 'something went wrong',
                        other: error,
                    };
                }
            }
            catch(e){
                console.log(resp, e);
                newResponse.error = {
                    text: 'unable to parse to JSON',
                    other: e,
                };
            }

            setResponse(newResponse);
        })
        .catch((err) => {
            console.log(err);
            const newResponse: tsCallResponse = {};
            newResponse.loading = false;
            newResponse.error = {
                text: 'something went wrong',
                other: err,
            };
            setResponse(newResponse);
        });
    }

    return {
        response,
        call,
    };
}