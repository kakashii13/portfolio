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

export const ProjectCard = ({
  title,
  content,
  badges,
  linkGithub,
  linkDeploy,
  img,
}) => {
  return (
    <Stack
      justifyContent={["center", "center", "space-between"]}
      flexDirection={["column", "column", "row"]}
      borderRadius="10px"
      p="10px"
    >
      <VStack p="10px" h="100%" justifyContent="space-between" spacing={10}>
        <Heading as="h3" fontSize="24px" textAlign="center">
          {title}
        </Heading>
        <Text textAlign="center" w={["auto", "400px"]}>
          {content}
        </Text>
        <HStack>
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </HStack>
        <HStack>
          <Link href={linkGithub} isExternal>
            <Button>Github</Button>
          </Link>
          <Link href={linkDeploy} isExternal>
            <Button variant="outline">Deploy</Button>
          </Link>
        </HStack>
      </VStack>
      <Link href={linkDeploy} isExternal maxW="auto ">
        <Image src={img} borderRadius="10px" />
      </Link>
    </Stack>
  );
};
