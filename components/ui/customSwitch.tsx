
import { colors } from '@/config/theme/theme';
import { useState } from 'react';
import { Platform, Switch, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

interface Props {
    isOn: boolean;
    text?: string;

    onChange: (value: boolean) => void;

}

export const CustomSwitch = ({ isOn, text, onChange }: Props) => {


    return (
        <View style={styles.switchRow}>

            {
                text && (<Text style={{ color: colors.text }}>{text}</Text>)
            }

            <Switch
                //    trackColor={{false:'#767577', true: '#81b0ff'}}
                //    thumbColor={isEnabled ? '#8316a4' : '#f4f3f4'}
                thumbColor={Platform.OS === 'android' ? colors.primary : ''}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onChange}
                value={isOn}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    }
})