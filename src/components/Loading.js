import React from 'react';
import { ScrollView, Spinner, HStack, Heading, Center, NativeBaseProvider } from 'native-base';

const Loading = () => {
  return <HStack space={2} alignItems="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>;
};

    export default () => {
        return (
          <ScrollView
          contentContainerStyle={{flex : 1}}
          scrollEnabled={false}
          >
            <Center flex={1} px="3">
                <Loading />
            </Center>
          </ScrollView>
        );
    };
    