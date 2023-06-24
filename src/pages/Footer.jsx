import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <VStack h="150px" spacing={5}>
      <Text>Contact me</Text>
      <HStack>
        <Link href="https://github.com/kakashii13" isExternal>
          <Button>Github</Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/matias-dominguez-b9b91a142/"
          isExternal
        >
          <Button colorScheme="">LinkedIn</Button>
        </Link>
      </HStack>
    </VStack>
  );
};
