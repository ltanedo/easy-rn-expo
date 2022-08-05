import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';

import App from './src/App';

// 

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
LogBox.ignoreLogs(['VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor. '])
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.']);
LogBox.ignoreAllLogs(true)
registerRootComponent(App);

