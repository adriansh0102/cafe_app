
import { colors, globalStyles } from '@/config/theme/theme';
import { Pressable, StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

interface Props {
    text: string;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean

    onPress: () => void;
}
export const Button = ({ text, style, disabled = true, onPress }: Props) => {

    return (
        <Pressable
            disabled={!disabled}
            onPress={onPress}
            style={({ pressed }) => ([
                globalStyles.btnPrimary,
                disabled ?
                    {
                        opacity: pressed ? 0.8 : 1,
                        backgroundColor: colors.primary
                    } : {
                        opacity: pressed ? 0.8 : 1,
                        backgroundColor: colors.disabled
                    },
                style,
            ])}
        >
            <Text style={[
                globalStyles.btnPrimaryText,
                {
                    color: colors.buttonTextColor
                }
            ]}>{text}</Text>
        </Pressable>
    );
}