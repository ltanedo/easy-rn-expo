import React, { 
  useState, 
  useEffect, 
  useMemo, 
  useRef, 
  useCallback 
} from 'react';

import { 
  RefreshControl,
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions,
  SafeAreaView
} from 'react-native';

import { 
  PROVIDER_GOOGLE 
} from "react-native-maps"; 
import * as Location from 'expo-location';           

import Map from "../components/Map";
import Loading from "../components/Loading";
import MapSheet from "./MapSheet";

import {data} from "../fetchers/dummy";

export default function MapScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocation(
        {
          coords : { //40.72663434291258, -73.98570091888877
            latitude: 40.72663434291258,  //40.7506,
            longitude: -73.98570091888877,  //-73.9935,
          }
        }
      );
    })();
  }, []);


  const onRefresh = React.useCallback(() => {
    console.log("On Refreshed Called")
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (

    <View style={{flex: 1}}>
      {
        location != null ?
          <>
            <Map location={location}
                 markers={data}/>
            <MapSheet markers={data}/>
          </>
        :
          <Loading/>
        }
    </View>
  );
}

const styles = StyleSheet.create({
});
