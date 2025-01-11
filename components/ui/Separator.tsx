
import { colors } from '@/config/theme/theme';
import { StyleProp, ViewStyle } from 'react-native';
import { Text, View } from 'react-native';

interface Props {
    style?: StyleProp<ViewStyle>;
}
export const Separator = ({ style }: Props) => {

    return (
        <View style={{
            backgroundColor: colors.cardBackground
        }}>
            <View
                style={[
                    {
                        alignSelf: 'center',
                        width: '98%',
                        height: 1,
                        backgroundColor: colors.text,
                        opacity: 0.1,
                        marginVertical: 8
                    },
                    style
                ]}
            />
        </View>
    );
}