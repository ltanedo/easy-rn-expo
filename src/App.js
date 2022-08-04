//  React
import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native'
// React Navigation
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install @react-navigation/bottom-tabs
// npm install @react-navigation/drawer
// expo install react-native-screens react-native-safe-area-context
// expo install react-native-gesture-handler react-native-reanimated
import { DefaultTheme, DarkTheme }     from '@react-navigation/native';
import { createDrawerNavigator }       from '@react-navigation/drawer';
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import { createBottomTabNavigator }    from '@react-navigation/bottom-tabs';
import { NavigationContainer }         from '@react-navigation/native';    
// Native Base
import { NativeBaseProvider } from 'native-base';
import { extendTheme } from "native-base";


import BottomTabs from "./navigation/BottomTabs";
import Map        from "./screens/Map";
import DemoScreen from "./screens/DemoScreen";

const config = {
  useSystemColorMode: true,
  // initialColorMode: "dark",
};
const customTheme = extendTheme({ config });
const Drawer      = createDrawerNavigator();


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
          <Drawer.Screen name="Component Demo" component={DemoScreen} options={{}}/>
          <Drawer.Screen name="Stack Demo" component={BottomTabs} options={{}}/>
          <Drawer.Screen name="Map Demo" component={Map} options={{}}/>
        </Drawer.Navigator>

      </NavigationContainer>
    </NativeBaseProvider>
  );
}
