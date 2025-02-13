import { globalStyles } from '@/config/theme/theme';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { Text, View, StyleProp } from 'react-native';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
}
export const CustomView = ({ style, children, margin = false }: Props) => {

    return (
        <View style={[
            globalStyles.mainContainer,
            margin ? globalStyles.globalMargin : null,
            style
        ]}>
            {children}
        </View>
    );
}