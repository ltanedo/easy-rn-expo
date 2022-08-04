import * as React from 'react';
import { View, Text, TouchableOpacity, Button} from 'react-native';


export function HomeScreen_Two({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to HomeScreen_One"
        onPress={() => navigation.navigate('HomeScreen_One')}
      />
    </View>
  );
}