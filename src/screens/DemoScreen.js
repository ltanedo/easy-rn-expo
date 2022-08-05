import * as React from 'react';
import { RefreshControl, StyleSheet, SafeAreaView, ScrollView, Pressable} from 'react-native';
import { Button, Box } from "native-base";

import RowCard from '../components/RowCard';
import Banner from '../components/Banner';
import ImageCard from '../components/ImageCard';
import RecordButton from '../components/RecordButton';
import Loading from "../components/Loading";
import RefreshButton from "../components/RefreshButton";


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function DemoScreen({ navigation }) {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    console.log("I was refreshed")
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
      <ScrollView
        // contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
      {/* <Banner/>
      <RowCard/>
      <ImageCard/> */}
      <RefreshButton callback={onRefresh}
                     label = "Refresh"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    paddingBottom: 30
  },
});
