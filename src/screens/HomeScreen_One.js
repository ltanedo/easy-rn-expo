import * as React from 'react';
import { View, Text, TouchableOpacity, Button} from 'react-native';


export function HomeScreen_One({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to HomeScreen_Two"
        onPress={() => navigation.navigate('HomeScreen_Two')}
      />
    </View>
  );
}