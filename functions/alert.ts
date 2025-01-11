import { Alert } from 'react-native';


interface Props {
    title: string;
    msg: string;
    onPressOk?: () => void;
}

export const AlertFunction = ({ title, msg, onPressOk = () => {} }: Props) => {

    Alert.alert(title, msg, [
        {
            text: 'OK',
            onPress: onPressOk
        },
        {
            text: 'Cancel',
            onPress: () => { },
            style: 'destructive'
        }
    ], {
        cancelable: true,
        onDismiss() {
            console.log('afuera press')
        },
    })
}

export const AlertFunctionMessage = ({ title, msg, onPressOk }: Props) => {

    Alert.alert(title, msg, [
        {
            text: 'OK',
            onPress: onPressOk
        },
    ])
}