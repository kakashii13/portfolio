import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

export const Presentation = () => {
  return (
    <VStack pt="40px" minH="30%" spacing={10}>
      <VStack alignItems="center" maxW="auto" spacing={5} textAlign="center">
        <Heading>Matias Dominguez</Heading>
        <HStack>
          <Text>Developer</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
