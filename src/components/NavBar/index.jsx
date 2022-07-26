import { HStack, Text } from "@chakra-ui/react";
import React from "react";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" py="30px">
      <Text fontWeight="bold" fontSize="20px">
        MD
      </Text>
      <HStack>
        <Text>Home</Text>
        <Text>Works</Text>
      </HStack>
    </HStack>
  );
};
