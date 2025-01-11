import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

interface Props {
    title: string;
}

const HeaderScreen = ({ title }: Props) => {
  return (
    <Stack.Screen 
      options={{
        // headerStyle:{ backgroundColor:'red'},
        // headerTintColor:'green',
        // headerLeft: ()=>{}
        headerTitle: title
      }}
    />
  )
}

export default HeaderScreen