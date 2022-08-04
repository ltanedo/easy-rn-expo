import * as React from 'react';
import { View, Text, TouchableOpacity, Button} from 'react-native';

export function ProfileScreen_One({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to ProfileScreen_Two"
        onPress={() => navigation.navigate('ProfileScreen_Two', 
          {
            data : "passed from ProfileScreen_One" 
          }
        )}
      />
    </View>
    );
  }