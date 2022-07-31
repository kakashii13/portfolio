import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <VStack minH="300px" py="100px" alignItems="center" spacing={10} id="about">
      <Heading>About me ( )</Heading>
      <Text maxW="500px" textAlign="center">
        I'm Matias, and I'm 26 years old. I'm a self-taught frontend developer
        looking for my first job. I'm a super responsible person and I love
        learn. I live in Buenos Aires, Argentina.
      </Text>
    </VStack>
  );
};
