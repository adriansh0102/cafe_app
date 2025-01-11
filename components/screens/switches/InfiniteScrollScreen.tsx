import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Title } from '@/components/ui/Title';
import { colors } from '@/config/theme/theme';

const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 3000)
    };

    return (
        <View>
            <FlatList
                data={numbers}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <ListItem number={item} />}

                ListFooterComponent={() => (
                    <View style={{ height: 100, justifyContent: 'center' }}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}
            />

        </View>
    )
}

interface ListItemProps {
    number: number;
}

const ListItem = ({ number }: ListItemProps) => {
    return (
        <Title text={`${number}`} />
    )
}

export default InfiniteScrollScreen