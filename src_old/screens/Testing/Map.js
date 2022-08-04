import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import Button  from './Button';

// import RNLocation from 'react-native-location';
import Geolocation from 'react-native-geolocation-service';


export default class Map extends React.PureComponent {

  constructor() {
      super();
      this.state = {
        location: null
      };
      console.log('constructor')
    }

  componentDidMount() {
    console.log('componentDidMount')

    Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({
            location : position['coords']
          })
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }



  render() {
    const { location } = this.state;
    console.log(location);
    return(
    <SafeAreaView style={{ flex: 1 }}>
        {location == null ?
          <MapView
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            showsUserLocation = {true}
          >
          <Marker
             coordinate={{               
              latitude: 37.78825,
              longitude: -122.4324,
             }}
             title={"Starting"}
             description={"This is where you started"}/>

          </MapView>
        : <Text> loading </Text>}

        <View style={{
                position: 'absolute',//use absolute position to show button on top of the map
                bottom: '10%', //for center align
                // justifyContent: 'center',
                left: '25%'
        }}>
            <Button />
        </View>
    </SafeAreaView>
  )
  }
}
