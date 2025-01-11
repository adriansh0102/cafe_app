import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="product"
        options={{
          title: 'Productos',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="gasto"
        options={{
          title: 'Gastos',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
       <Tabs.Screen
        name="index"
        options={{
          title: 'Usuario',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Reportes',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
     
      <Tabs.Screen
        name="config"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
