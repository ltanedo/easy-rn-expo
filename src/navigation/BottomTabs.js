
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {HomeScreen_One}     from '../screens/HomeScreen_One';
import {HomeScreen_Two}     from '../screens/HomeScreen_Two';

import {ProfileScreen_One} from '../screens/ProfileScreen_One';
import {ProfileScreen_Two} from '../screens/ProfileScreen_Two';

const Tab   = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen_One" component={HomeScreen_One} />
    <Stack.Screen name="HomeScreen_Two" component={HomeScreen_Two} />
    </Stack.Navigator> 
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="ProfileScreen_One" component={ProfileScreen_One} />
    <Stack.Screen name="ProfileScreen_Two" component={ProfileScreen_Two} />
    </Stack.Navigator> 
  )
}

export default function BottomTabs() {
  return (
      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeStack} options={{
            headerShown: false,
          }}/>

        <Tab.Screen name="Profile" component={ProfileStack} options={{
            headerShown: false,
          }}/>

      </Tab.Navigator>
  );
}

