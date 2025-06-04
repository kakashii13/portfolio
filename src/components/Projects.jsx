import { HStack, Stack, Text, Link, Box, Image } from "@chakra-ui/react";
import note from "../assets/note.png";

const PROJECTS_DEFAULT = [
  {
    id: 1,
    title: "Notis",
    description: "A simple note-taking app",
    link: "https://github.com/kakashii13/notis",
    image: note,
  },
];

export const Projects = () => {
  return (
    <Stack>
      {PROJECTS_DEFAULT.map((project) => (
        <Box key={project.id} isplay={"flex"} flexDirection={"column"} gap={2}>
          <Link
            href={project.link}
            isExternal
            textDecoration="none!important"
            my="10px"
          >
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <Image src={project.image} width="25px" height="25px" />

              <Text
                cursor="pointer"
                _hover={{
                  color: "whiteAlpha.600",
                }}
                fontSize="lg"
              >
                {project.title}
              </Text>
            </Box>
            <Text fontSize="sm" color="gray.500">
              {project.description}
            </Text>
          </Link>
        </Box>
      ))}
      <HStack justifyContent="center"></HStack>
    </Stack>
  );
};
