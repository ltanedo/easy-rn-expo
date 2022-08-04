import * as React from 'react';
import { View, Text, TouchableOpacity, Button} from 'react-native';

export function ProfileScreen_Two({ route, navigation }) {
    console.log(route.params)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{route.params.data}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }