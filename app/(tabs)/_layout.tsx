import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
        }}
      />
      <Tabs.Screen
        name="allTask"
        options={{
          title: 'allTask',
        }}
      />
      <Tabs.Screen
        name="addTask"
        options={{
          title: 'addTask',
        }}
      />
    </Tabs>
  );
}
