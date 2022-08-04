import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

import { MapScreen, HistoryScreen, SettingsScreen } from './Screens';

export default function Main() {
  return (
      <Tab.Navigator screenOptions={{
          tabBarStyle: {
            height: 0,
            position: 'absolute'},
        }}
      >

        <Tab.Screen name="Map" component={MapScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                        <AntDesign name="find" color={color} size={size} />
                      ),
            tabBarLabelStyle: {
              marginTop: 5,
              fontSize: 12
            }
          }}

          />

        <Tab.Screen name="History" component={HistoryScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                        <AntDesign name="book" color={color} size={size} />
                      ),
            tabBarLabelStyle: {
              fontSize: 12
            },
            // tabBarBadge: 3,
          }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" color={color} size={size} />
                      ),
            tabBarLabelStyle: {
              fontSize: 12
            }
          }}/>



      </Tab.Navigator>
  );
}
