import React from 'react';
import { View, Text, Box, VStack, Heading, Divider, Flex, useColorModeValue, colorMode } from 'native-base';

export default function RowCard() {

  // Header
  // Text

	return (
      <Box
        shadow={6}
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
        my={2}
        mx={3}
        borderRadius={16}
        width={{ base: 'auto', lg: '768px' }}
      >
        <VStack>
          <Heading
            size="md"
						pt={4}
						pl={4}
          >
            {'this a row'}
          </Heading>
					<Text pl={4} pb={4}>Hello</Text>
        </VStack>
      </Box>
	);
}
