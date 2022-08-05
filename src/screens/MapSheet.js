import React, { 
    useState, 
    useEffect, 
    useMemo, 
    useRef, 
    useCallback 
} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    useColorScheme,
    Text
} from 'react-native';
import {
  Heading,
  Divider,
  Row,
  HStack
} from 'native-base';
import BottomSheet, { 
  BottomSheetFlatList,
  BottomSheetVirtualizedList,
  BottomSheetScrollView
}  from '@gorhom/bottom-sheet';


import HalfCard from "../components/HalfCard";

export default function MapScreen(props) {

    const isDarkMode     = useColorScheme() === 'dark';
    const bottomSheetRef = useRef(null);
    const snapPoints     = useMemo(() => ['25%', '60%','90%'], []);
  
    const handleSheetChanges = useCallback((index) => {
      console.log('handleSheetChanges', index);
    }, []);

    const backgroundConfig = isDarkMode ?  
        { backgroundColor: '#37373c' } 
      : { backgroundColor: '#ffffff' }
    const handleConfig = isDarkMode ?  {} 
      : { backgroundColor: '#37373c' }

    return (
      <View style={styles.contentContainer}>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={backgroundConfig}
        handleIndicatorStyle={handleConfig}
        enableHandlePanningGesture={true}
        enableContentPanningGesture={true}
      >
        <View style={styles.contentContainer}>
          <HStack alignItems="center" justifyContent="space-between">
          <Heading size="2xl" ml={5}>Restaurants</Heading>
          <Heading size="lg"  mr={5}>+{props.markers.length}</Heading>
          </HStack>
        <Divider my={2} />
        {/* <BottomSheetScrollView> */}
        <BottomSheetVirtualizedList
          data={props.markers}
          getItemCount={(data) => data.length}
          getItem={(data, index) => data[index]}
          renderItem={({ item }) => (
            <HalfCard title={item.name}
                      header={item.foods}
                      tag={item.distance + " km"}
                      uri={item.uri}
            />
          )}
          // contentContainerStyle={styles.contentContainer}
        />          
        {/* </BottomSheetScrollView> */}
        </View>
      </BottomSheet>
      </View>

    )
}

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      // alignItems: 'center',
    },
  });
  