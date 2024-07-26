import React from "react";
import { Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { Tech } from "../components/Tech";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <Stack h="100vh">
      <Presentation />
      <HStack justifyContent="space-around" alignItems="start">
        <VStack alignItems="start">
          <Heading size="lg">Projects</Heading>
          <Projects />
        </VStack>
        <VStack alignItems="start">
          <Heading size="lg">Tech</Heading>
          <Tech />
        </VStack>
      </HStack>
      <Footer />
    </Stack>
  );
};
