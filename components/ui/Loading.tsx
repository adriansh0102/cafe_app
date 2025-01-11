import { View, ActivityIndicator, Text } from 'react-native';
import React from 'react'
import { colors } from 'react-native-elements'

const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={colors.primary} size={60} />
            <Text>Cargando...</Text>

        </View>
    )
}

export default Loading