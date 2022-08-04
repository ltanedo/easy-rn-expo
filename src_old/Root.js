import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NativeBaseProvider } from 'native-base';
import BaseTheme from './theme/BaseTheme';

import Main from './screens/Testing/Main';
import Drawer1 from './screens/Drawer1/Drawer1';

import { StatusBar, useColorScheme } from 'react-native'

const Drawer = createDrawerNavigator();

import { extendTheme } from "native-base";

// Define the config
const config = {
  useSystemColorMode: true,
  // initialColorMode: "dark",
};

// extend the theme
const customTheme = extendTheme({ config });

export default function Root() {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? true : false,
  };

  return (
      <NativeBaseProvider theme={customTheme}>
      <NavigationContainer theme={ isDarkMode ? DarkTheme : DefaultTheme }>
      <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' } />

        <Drawer.Navigator initialRouteName="Main">

          <Drawer.Screen name="Main" component={Main} options={{
              // drawerItemStyle: { height: 0 }
              headerShown: true,
            }}/>

          <Drawer.Screen name="Drawer1" component={Drawer1} />

          <Drawer.Screen name="Drawer2" component={Drawer1} />

        </Drawer.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}
