import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native';
import { colors, globalStyles } from '@/config/theme/theme';
import { Title } from '../ui/Title';

const PullToRefreshScreen = () => {

    const [isRefreshing, setisRefreshing] = useState(false);
    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setisRefreshing(true);

        setTimeout(() => {
            setisRefreshing(false);
        }, 5000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    colors={[colors.primary]}
                    onRefresh={onRefresh}
                />
            }
            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        >
            <Title text='refresh' />
        </ScrollView>
    )
}

export default PullToRefreshScreen