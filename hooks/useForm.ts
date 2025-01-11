import { useReducer } from "react";
import { onChangeProps } from '../components/ui/Input';
import { validateInput } from "@/functions/validate-input";

enum InputActions {
    INPUT_CHANGE = 'INPUT_CHAGE',
    INPUT_FOCUS = 'INPUT_FOCUS',
    INPUT_BLUR = 'INPUT_BLUR',
    CLEAR_INPUT = 'CLEAR_INPUT',
    SET_INPUT = 'SET_INPUT'
}

export type InputState = {
    value: string,
    error: string,
    hasError: boolean,
    active: boolean,
    name: string,
    isFormValid: boolean
    optionValid: Option
}

export type Option = {
    require?: boolean;
    minLength?: number;
    maxLength?: number;
    max?: number;
    min?: number;
}

export type FormState = {
    [key: string]: InputState;
}

type FormAction = {
    type: InputActions;
    data: InputState;
}

const formReducer = (state: FormState, action: FormAction) => {
    const { type, data } = action;

    switch (type) {
        case InputActions.INPUT_CHANGE:
            return {
                ...state,
                [data.name]: {
                    ...state[data.name],
                    value: data.value,
                    error: data.error,
                    hasError: data.hasError,
                    isFormValid: data.isFormValid,
                }
            }
        default:
            return state;
    }
}

export const useForm = ( inicialState: FormState ) => {
    const [ state, dispatch ] = useReducer( formReducer , inicialState );
    
    const onGhange = ({text, name, optionValid }:onChangeProps) => {
        const { error, hasError }= validateInput({value: text,name, optionValid});

        dispatch({
            type: InputActions.INPUT_CHANGE,
            data:{
                value: text,
                name,
                error,
                hasError,
                active: true,
                isFormValid: !hasError,
                optionValid
            }
        })
    }

    const isFormValid = (): boolean => {
        let isValid = true;
        Object.keys(state).forEach( key => {
            if ( !state[key].isFormValid) isValid = false; 
        })
        return isValid;
    }

 return {
    formState: state,
    onGhange,
    isFormValid: isFormValid()
 }
}


