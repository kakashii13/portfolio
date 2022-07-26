import {
  Badge,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import todoThings from "../assets/Todothings.png";

export const Proyects = () => {
  return (
    <Stack h="100vh">
      <Heading>Proyects</Heading>
      <HStack boxShadow="base" mt="20px" justifyContent="space-between">
        <VStack p="10px" h="100%" justifyContent="space-between">
          <Heading as="h3" fontSize="24px">
            Things ToDo
          </Heading>
          <HStack>
            <Badge>React JS</Badge>
            <Badge>Chakra UI</Badge>
            <Badge>Firebase</Badge>
          </HStack>
          <HStack>
            <Link href="https://github.com/kakashii13/todo-chakraui" isExternal>
              <Button>Github</Button>
            </Link>
            <Link href="https://todos-things.netlify.app/" isExternal>
              <Button variant="outline">Deploy</Button>
            </Link>
          </HStack>
        </VStack>
        <Image src={todoThings} width="500px" />
      </HStack>
    </Stack>
  );
};
