import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Icon,
  Text,
  HStack,
  Avatar,
  useColorModeValue,
} from 'native-base';
export const Example = () => {
  return (
    <Box p={5} rounded="xl" shadow={4} w="100%">
      <Stack space={6}>
        <Avatar
          size={'sm'}
          source={{
            uri: 'https://i.pinimg.com/originals/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg',
          }}
        />
        <Stack space={3}>
          <Heading
            size="lg"
            color={useColorModeValue('blueGray.700', 'blueGray.100')}
          >
            Dressing room
          </Heading>
          <Text
            color={useColorModeValue('blueGray.500', 'blueGray.200')}
            fontWeight="medium"
            fontSize="xs"
          >
            Design the new dressing room for the upcoming tour.
          </Text>
        </Stack>
        <HStack
          justifyContent="space-between"
          alignItems="flex-end"
          flexShrink={1}
        >
          <Stack space={3}>
            <HStack space={3} alignItems="center" flexShrink={1}>
              <Icon
                name="grid"
                type="MaterialCommunityIcons"
                color="blueGray.700"
              />
              <Text
                flexShrink={1}
                fontWeight="medium"
                color={useColorModeValue('blueGray.500', 'blueGray.200')}
              >
                Task: KitchenSink
              </Text>
            </HStack>
            <HStack space={3} alignItems="center">
              <Icon
                name="calendar"
                type="MaterialCommunityIcons"
                color="blueGray.700"
              />
              <Text
                color={useColorModeValue('blueGray.500', 'blueGray.200')}
                fontWeight="medium"
              >
                Date: 10.04.2021
              </Text>
            </HStack>
          </Stack>
          {/* <Avatar.Group size="sm" spacing={-3}>
            <Avatar
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
              }}
            >
              AK
            </Avatar>
            <Avatar
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
              }}
            >
              RS
            </Avatar>
            <Avatar
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg',
              }}
            >
              MR
            </Avatar>
          </Avatar.Group>
        */}
        </HStack>
      </Stack>
      <HStack
        position="absolute"
        top={3}
        right={3}
        space={2}
        alignItems="center"
      >
        <Icon
          name="star"
          type="SimpleLineIcons"
          size={4}
          color="blueGray.700"
        />
        <Icon name="more-horiz" color="blueGray.700" />
      </HStack>
    </Box>
  );
};
