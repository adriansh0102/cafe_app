
import { colors } from '@/config/theme/theme';
import { PropsWithChildren } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: Props) => {

    return (
        <View style={[
            {
                backgroundColor: colors.cardBackground,
                borderRadius:10,
                padding:10
            },
            style
        ]}>
            { children }
        </View>
    );
}