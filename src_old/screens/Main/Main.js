import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { HomeScreen, SettingsScreen } from './Screens';

export default function Main() {
  return (
      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
          }}/>

        <Tab.Screen name="Settings" component={SettingsScreen} options={{
            headerShown: false,
          }}/>

      </Tab.Navigator>
  );
}
