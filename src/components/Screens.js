import * as React from 'react';
import {  Text, ScrollView, SafeAreaView, Button, StyleSheet } from 'react-native';
import { View,Box,ZStack } from 'native-base';


import Banner from './Banner';
import RowCard     from './RowCard';
import ImageCard   from './ImageCard';
// import Button from './Button';
import Map from './Map'

export function MapScreen() {
  return (
      <Map/>
  );
}

export function HistoryScreen() {
  return (
    <SafeAreaView>
    <ScrollView>
      <Button/>
      <Banner/>
      <RowCard/>
      <ImageCard/>
    </ScrollView>
    </SafeAreaView>
  );
}

export function SettingsScreen() {
  return (
    <SafeAreaView>
    <ScrollView>
      <Button/>
      <Banner/>
      <RowCard/>
      <ImageCard/>
    </ScrollView>
    </SafeAreaView>
  );
}
