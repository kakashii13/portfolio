import React from "react";
import { Divider, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { FaReact, FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export const Tech = () => {
  return (
    <Stack h="400px" pt="50px" spacing={10} id="tech">
      <Heading textAlign="center">Tech ( )</Heading>
      <Text textAlign="center">I use this tech for create my websites</Text>
      <HStack justifyContent="center">
        <Icon as={IoLogoHtml5} h="60px" w="60px" />
        <Icon as={IoLogoCss3} h="60px" w="60px" />
        <Icon as={IoLogoJavascript} h="60px" w="60px" />
        <Icon as={FaReact} h="60px" w="60px" />
        <Icon as={FaGitSquare} h="60px" w="60px" />
        <Icon as={IoLogoFirebase} h="60px" w="60px" />
        <Icon as={SiTypescript} h="60px" w="60px" />
      </HStack>
    </Stack>
  );
};
