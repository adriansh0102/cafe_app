import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import { CustomView } from '@/components/ui/CustomView'
import { Card } from '@/components/ui/Card'
import { globalStyles } from '@/config/theme/theme'
import { ScrollView } from 'react-native'
import { Option } from '@/hooks/useForm'

export type onChangeProps = {
    text: string;
    name: string;
    optionValid: Option
}
export type OnFocusProps = {
    name: string;
}
export type OnBlurProps = {
    name: string;
}

interface InputProps {
    placeholder: string;
    value: string;
    name: string;
    text: string;
    error: string;
    hasError: boolean;
    active: boolean;
    optionValid: {};
    keyboardType?: KeyboardTypeOptions;

    onChange: ({ text, name }: onChangeProps) => void;
    onFocus: ({ name }: OnFocusProps) => void;
    onBlur: ({ name }: OnBlurProps) => void;

}

const Input = ({ placeholder, value, name, text, error,optionValid, keyboardType='default', hasError, onChange, onFocus, onBlur }: InputProps) => {
    
    let passw = false;
    if ( name === 'password' ) passw = true;
    
    return (
        <>
            <Text style={{ marginLeft: 8, marginTop: 8 }}>{`${text}:`}</Text>
            <TextInput
                style={globalStyles.input}
                placeholder={placeholder}
                value={value}
                secureTextEntry={passw}
                keyboardType={keyboardType}

                onChangeText={text => onChange({ text, name, optionValid })}
                onFocus={() => onFocus({ name })}
                onBlur={() => onBlur({ name })}
            />
            {
                hasError ? (
                    <Text style={{ color: 'red', marginLeft: 8,fontSize:11  }}>{error}</Text>
                ) : null
            }
        </>



    )
}

export default Input;