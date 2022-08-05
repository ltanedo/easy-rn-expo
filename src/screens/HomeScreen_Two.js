import * as React from 'react';
import { RefreshControl, ScrollView, Button, StyleSheet} from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export function HomeScreen_Two({ navigation }) {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
    />}>      
      <Button
        title="Go to HomeScreen_One"
        onPress={() => navigation.navigate('HomeScreen_One')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
});