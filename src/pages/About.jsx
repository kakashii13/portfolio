import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <VStack minH="300px" py="10px" alignItems="center" spacing={10} id="about">
      <Heading>(About me)</Heading>
      <Text maxW="500px" textAlign="center">
        I'm Matias, and I'm 27 years old. I'm a student of Programmer analyst at
        the Universidad Abierta Interamericana, and I'm currently looking for my
        first job in this field. I'm a highly responsible person, and I love
        learning. I live in Buenos Aires, Argentina.
      </Text>
    </VStack>
  );
};
