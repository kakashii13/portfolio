import {
  Button,
  Heading,
  HStack,
  Img,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiLinkedinBoxLine } from "react-icons/ri";
import test from "../../assets/test.jpeg";

export const Main = () => {
  return (
    <VStack h="100%" spacing={10}>
      <Stack
        boxShadow="base"
        w="300px"
        h="300px"
        border="1px solid black"
        p="10px"
      >
        <Img src={test} />
      </Stack>
      <VStack alignItems="center" maxW="500px" spacing={5}>
        <Heading>Hi, I'm Matias.</Heading>
        <Text>Frontend Developer with JS 💛</Text>
        <HStack>
          <Link
            href="https://www.linkedin.com/in/matias-dominguez-b9b91a142/"
            isExternal
          >
            <Button leftIcon={<RiLinkedinBoxLine />}>Contact me</Button>
          </Link>
          {/* <Button
            variant="outline"
            color="blackAlpha.700"
            _hover={{ bg: "blackAlpha.50" }}
            _active={{ bg: "none" }}
          >
            Check my work
          </Button> */}
        </HStack>
      </VStack>
    </VStack>
  );
};
