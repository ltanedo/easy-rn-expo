import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';

import { PROVIDER_GOOGLE } from "react-native-maps"; //TODO: Added
import * as Location from 'expo-location';           //TODO: Added

import Button from "../components/Button";

export default function Map() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocation(location);
    })();
  }, []);

  return (

    <SafeAreaView style={{ flex: 1 }}>
      {location != null ?
        <MapView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          showsUserLocation = {true}
        >
        <MapView.Marker
          coordinate={{ latitude : location.coords.latitude , longitude : location.coords.longitude }}
          title={"Starting"}
          description={"This is where you started"}/>

        </MapView>
      : <Text> loading </Text>}

    <View style={{ position: 'absolute',//use absolute position to show button on top of the map
                   bottom: '10%', //for center align
                   // justifyContent: 'center',
                   left: '25%' }}>
      <Button />
    </View>
</SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
