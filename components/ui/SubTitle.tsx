import { View, Text } from 'react-native'
import React from 'react'
import TabBarBackground from '@/components/ui/TabBarBackground';
import { colors, globalStyles } from '@/config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string;
    safe?: boolean;
    backgroundColor?: string;
}

const SubTitle = ({text, safe=false, backgroundColor= colors.background}:Props) => {

    const { top } = useSafeAreaInsets();

  return (
    <Text style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        padding:10,
        marginBottom: 10,
        backgroundColor: backgroundColor,
        borderRadius:3
    }}
    >
        { text }
    </Text>
  )
}

export default SubTitle