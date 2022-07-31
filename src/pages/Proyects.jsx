import { Button, Heading, HStack, Link, Stack } from "@chakra-ui/react";
import React from "react";
import hooker from "../assets/hooker.png";
import todoThings from "../assets/Todothings.png";
import { ProyectCard } from "../components/ProyectCard";

const PROYECTS_DEFAULT = [
  {
    id: 0,
    title: "Things ToDos",
    content: "Create, complete and delete your ToDo's",
    badges: ["React JS", "Chakra UI", "Firebase"],
    linkGithub: "https://github.com/kakashii13/todo-chakraui",
    linkDeploy: "https://todos-things.netlify.app/",
    img: todoThings,
  },
  {
    id: 1,
    title: "Hooker",
    content:
      "Hooker is a social media. You can share your stuffs with other people, like Twitter!",
    badges: ["React JS", "Chakra UI", "Firebase", "TypeScript"],
    linkGithub: "https://github.com/kakashii13/hooker",
    linkDeploy: "https://hooker.vercel.app/",
    img: hooker,
  },
];

export const Proyects = () => {
  return (
    <Stack h="1000px" id="proyects" p="40px" spacing={10}>
      <Heading textAlign="center">Proyects ( )</Heading>
      {PROYECTS_DEFAULT.map((proyect) => (
        <ProyectCard key={proyect.id} {...proyect} />
      ))}
      <HStack justifyContent="center">
        <Link href="https://github.com/kakashii13" isExternal>
          <Button maxW="300px">See more</Button>
        </Link>
      </HStack>
    </Stack>
  );
};
