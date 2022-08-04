import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

import RowCard from '../components/RowCard';
import Banner from '../components/Banner';
import ImageCard from '../components/ImageCard';
import Button from '../components/Button';

export default function DemoScreen({ navigation }) {
  return (
    <ScrollView>
      <Banner/>
      <RowCard/>
      <ImageCard/>
      <Button/>

    </ScrollView>
    // </SafeAreaView>
  );
}