import { Option } from "@/hooks/useForm";
import { message } from "./message";

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

type ValidateInputParams = ({
    value: string,
    name: string,
    optionValid: Option
})

type ValidateInputReturns = {
    hasError: boolean;
    error: string;
}

export const validateInput = ({ value, name, optionValid }: ValidateInputParams): ValidateInputReturns => {

    let hasError = false;
    let error = '';
    const formatValue = value.trim();

    // else if ( optionValid.max) {  //TODO: modificar el string para numero
    //     hasError = true;
    //     error = message.msg_004
    // }else if ( optionValid.min ) {
    //     hasError = true;
    //     error = message.msg_004
    // }

    switch (name) {
        case 'email':
            if (formatValue === '') {
                hasError = true;
                error = message.msg_001
            }
            else if (!emailRegex.test(formatValue)) {
                hasError = true;
                error = message.msg_002
            }
            else {
                hasError = false;
                error = ''
            }
            break;
        default: break;
    }

    if (optionValid.require && formatValue === '') {
        hasError = true;
        error = message.msg_001
    } else if (optionValid.maxLength && formatValue.length > optionValid.maxLength) {
        hasError = true;
        error = message.msg_003
    } else if (optionValid.minLength && formatValue.length < optionValid.minLength) {
        hasError = true;
        error = message.msg_004
    }
   
    return { hasError, error };
}