import React, { useRef, useState, useEffect } from 'react';
import {View, StyleSheet,Dimensions,Pressable} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {Button } from 'native-base';
import RefreshButton from "./RefreshButton";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


export default function Map(props) {

  const mapRef = useRef(null);

  const [mapRegion, setMapRegion] = useState({
    latitude: props.location.coords.latitude,
    longitude: props.location.coords.longitude,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    // const userRegion = {
    //   latitude: props.location.coords.latitude,
    //   longitude: props.location.coords.longitude,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // };
    // mapRef.current?.animateToRegion(userRegion,500);
    
    camera = {
      center: {
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude
      },
      pitch: 0, 
      heading: 20,
      altitude: 2000, 
      zoom: 16
    }
    mapRef.current?.animateCamera(camera,{ duration: 500 })
  }, []);

  useEffect(() => {
    console.log("use effect called")
    const userRegion = {
      latitude: props.location.coords.latitude,
      longitude: props.location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    mapRef.current?.animateToRegion(userRegion,500);
  }, []);

  return(
    <>
    <MapView
      ref={mapRef}
      showsPointsOfInterest={false}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      // initialRegion={{
      //   latitude: 40.7506,  //40.7506,
      //   longitude: -73.9935,  //-73.9935,
      //   latitudeDelta: 0.005,
      //   longitudeDelta: 0.005,
      // }}
      region={
        mapRegion
      }

      showsUserLocation = {true}
      showsMyLocationButton={true}
      // provider={MapView.PROVIDER_GOOGLE}
      >
         {props.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coords}
              title={marker.name}
              description={marker.foods}
            />
          ))}
                 
    </MapView>
    <View style={styles.mapFloatTop}>
      <RefreshButton callback={()=>onRefresh()}></RefreshButton>
    </View>
      </>
    )
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
    mapFloatTop: {
      position: 'absolute',
      top: '0%', 
      left: '25%' 
    },
    mapFloatBottom: {
      position: 'absolute',
      bottom: '10%', 
      left: '25%' 
    },
    contentContainer: {
      flex: 1,
      // alignItems: 'center',
    },
  });
  