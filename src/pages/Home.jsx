import React from "react";
import { Heading, Stack, VStack, Box, Divider, Text } from "@chakra-ui/react";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials";

export const Home = () => {
  return (
    <Stack h="100vh">
      <Presentation />
      <VStack justifyContent="space-around" alignItems="start" spacing={10}>
        <Box
          fontSize="lg"
          textAlign="justify"
          display="flex"
          flexDirection="column"
          gap={10}
        >
          <Text>
            Hey! I'm Matias, a{" "}
            <Text fontWeight="bold" as="span">
              software developer
            </Text>{" "}
            from Argentina. I'm currently studying at UAI and learning more
            about how to build cool and useful software.{" "}
          </Text>
          <Text>
            I’m into coding, leadership stuff, and plants (yes, really). I learn
            fast, love solving problems, and I'm always up for a new challenge.
          </Text>
        </Box>
        <Divider />
        <VStack alignItems="start">
          <Heading size="lg">Projects</Heading>
          <Projects />
        </VStack>
        <Divider />
        <VStack alignItems="start">
          <Heading size="lg">Socials</Heading>
          <Socials />
        </VStack>
      </VStack>
    </Stack>
  );
};
