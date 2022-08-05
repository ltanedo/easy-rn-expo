//  React
import * as React from 'react';
import { StatusBar, useColorScheme, ScrollView } from 'react-native'
// React Navigation
import { DefaultTheme, DarkTheme }     from '@react-navigation/native';
import { createDrawerNavigator }       from '@react-navigation/drawer';
import { NavigationContainer }         from '@react-navigation/native';    
// Native Base
import { NativeBaseProvider } from 'native-base';
import { extendTheme } from "native-base";

/*
  Custom Imports
  - Bottom Navigator
  - Map Screen
  - DemoScreen 
*/
import BottomTabs from "./navigation/BottomTabs";
import MapScreen       from "./screens/MapScreen";
import DemoScreen from "./screens/DemoScreen";

/*
  NativeBase UI Config
  - useDarkLight
  - starting color mode
*/
const config = {
  useSystemColorMode: true,
  // initialColorMode: "dark",
};
const customTheme = extendTheme({ config });

/*
  Initialize Draweer (from side)
*/
const Drawer = createDrawerNavigator();

export default function App() {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? true : false,
  };

  return (
      <NativeBaseProvider theme={customTheme}>
      <NavigationContainer theme={ isDarkMode ? DarkTheme : DefaultTheme }>
      <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' } />

        <Drawer.Navigator initialRouteName="Main">
          {/* 
            options={{
              drawerItemStyle: { height: 0 },
              headerShown: true,
            }} 
          */}
                <Drawer.Screen name="Map Demo" component={MapScreen} options={{}}/>
        <Drawer.Screen name="Component Demo" component={DemoScreen} options={{}}/>
        <Drawer.Screen name="Stack Demo" component={BottomTabs} options={{}}/>
        </Drawer.Navigator>

      </NavigationContainer>
    </NativeBaseProvider>
  );
}
