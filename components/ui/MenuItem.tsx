import { colors } from '@/config/theme/theme';
import { Link, RelativePathString } from 'expo-router';
import { styled } from 'nativewind';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/Ionicons';
import { Separator } from './Separator';

interface Props {
    name: string;
    icon: string;
    href: RelativePathString;
    isFirst?: boolean;
    isLast?: boolean;
}

export const MenuItem = ({ name, icon, href, isFirst = false, isLast = false }: Props) => {

    return (
        <>
        <Link asChild href={href}>
            <Pressable
                // onPress={() => alert('click')}
            >
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: colors.cardBackground,
                        ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
                        ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 })
                    }}
                >
                    <Icons name={icon} size={25} style={{ marginRight: 10, color: colors.primary }} />
                    <Text style={{ color: colors.text }}>{name}</Text>
                    <Icons name='chevron-forward-outline' size={25} style={{ marginLeft: 'auto', color: colors.primary }} />
                </View>
            </Pressable>
        </Link>
        {
            !isLast && <Separator/>
        }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})