import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack
} from "native-base";

export default function Card(props) {
  return (
    <Box padding={3} shadow={6}>
      <Box
        width={{ base: 'auto', lg: '768px' }}
        borderRadius={16}
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }}
        _web={{
          shadow: 2,
          borderWidth: 0
        }}
        _light={{
          backgroundColor: "gray.50"
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={5/ 2}>
            <Image
              source={{
                uri:
                  props.uri
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400"
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs"
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {props.tag}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500"
              }}
              _dark={{
                color: "violet.400"
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {props.header}
            </Text>
          </Stack>
          {/* <Text fontWeight="400">
            {props.description}
          </Text> */}
          {/* <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200"
                }}
                fontWeight="400"
              >
                {props.footer}
              </Text>
            </HStack>
          </HStack> */}
        </Stack>
      </Box>
    </Box>
  );
}
