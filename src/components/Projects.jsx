import { HStack, Stack, Text, Link } from "@chakra-ui/react";

const PROJECTS_DEFAULT = [
  {
    id: 1,
    title: "Notis",
    description: "A simple note-taking app",
    link: "https://github.com/kakashii13/notis",
  },
];

export const Projects = () => {
  return (
    <Stack>
      {PROJECTS_DEFAULT.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          isExternal
          textDecoration="none!important"
        >
          <Text
            cursor="pointer"
            _hover={{
              color: "whiteAlpha.600",
            }}
          >
            - {project.title}
          </Text>
        </Link>
      ))}
      <HStack justifyContent="center"></HStack>
    </Stack>
  );
};
