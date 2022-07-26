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

export const Main = () => {
  return (
    <HStack spacing={5} h="100%">
      <Stack boxShadow="base" w="300px" h="300px">
        <Img />
      </Stack>
      <VStack alignItems="start" maxW="500px">
        <Heading>Hi, I'm Matias.</Heading>
        <Text>
          I'm a Frontend Developer with JS adipisicing elit. Quia magni
          explicabo commodi nulla amet quam, labore fuga inventore provident
          accusamus aliquid rerum. Nisi debitis cumque suscipit doloremque eius
          assumenda deserunt.
        </Text>
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
    </HStack>
  );
};
