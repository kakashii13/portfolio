import {
  Badge,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import todoThings from "../assets/Todothings.png";
import hooker from "../assets/hooker.png";

export const Proyects = () => {
  return (
    <Stack h="100vh" id="proyects" pt="40px" spacing={10}>
      <Heading textAlign="center">Proyects ( )</Heading>
      <HStack
        justifyContent="space-between"
        borderRadius="10px"
        overflow="hidden"
        p="10px"
      >
        <VStack p="10px" h="100%" justifyContent="space-between">
          <Heading as="h3" fontSize="24px">
            Things ToDos
          </Heading>
          <Text textAlign="center" w="400px">
            Create, complete and delete your ToDo's
          </Text>
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
        <Link href="https://todos-things.netlify.app/" isExternal w="600px">
          <Image src={todoThings} borderRadius="10px" />
        </Link>
      </HStack>
      <HStack
        // boxShadow="base"
        justifyContent="space-between"
        borderRadius="10px"
        overflow="hidden"
        p="10px"
      >
        <VStack
          p="10px"
          h="100%"
          justifyContent="space-between"
          // alignItems="start"
        >
          <Heading as="h3" fontSize="24px">
            Hooker
          </Heading>
          <Text textAlign="center" w="400px">
            Hooker is a social media. You can share your stuffs with other
            people, like Twitter!
          </Text>
          <HStack>
            <Badge>React JS</Badge>
            <Badge>TypseScript</Badge>
            <Badge>Chakra UI</Badge>
            <Badge>Firebase</Badge>
          </HStack>
          <HStack>
            <Link href="https://github.com/kakashii13/hooker" isExternal>
              <Button>Github</Button>
            </Link>
            <Link href="https://hooker.vercel.app/" isExternal>
              <Button variant="outline">Deploy</Button>
            </Link>
          </HStack>
        </VStack>
        <Link href="https://hooker.vercel.app/" isExternal w="600px">
          <Image src={hooker} borderRadius="10px" />
        </Link>
      </HStack>
    </Stack>
  );
};
