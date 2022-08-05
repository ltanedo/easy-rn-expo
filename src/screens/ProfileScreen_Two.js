import * as React from 'react';
import { RefreshControl, ScrollView, Button, StyleSheet,Text} from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export function ProfileScreen_Two({ route, navigation }) {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    console.log(route.params)
    return (
      <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
    />}> 
        <Text>{route.params.data}</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
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