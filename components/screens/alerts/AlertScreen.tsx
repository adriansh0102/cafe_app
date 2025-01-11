
import { Button } from '@/components/ui/Button';
import { CustomView } from '@/components/ui/CustomView';
import { Title } from '@/components/ui/Title';
import { globalStyles } from '@/config/theme/theme';
import { useEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    error?: boolean;    
    info: string;

}
export const AlertScreen = ({ info, error = false,  }: Props) => {

    const buttonAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Despues',
                onPress: () => console.log('despues press')
            },
            {
                text: 'OK',
                onPress: () => console.log('ok press')
            },
            {
                text: 'Cancel',
                onPress: () => console.log('cancel press'),
                style:'destructive'
            }
        ], {
            cancelable: true,
            onDismiss() {
                console.log('afuera press')
            },
        })
    }

    useEffect(() => {
        buttonAlert();
    }, [])
    

    return (
        <CustomView margin >
            <Title text='Alertas' />

            <Button
                text='Alerta 2 botones'
                onPress={buttonAlert}
            />
        </CustomView>
    );
}