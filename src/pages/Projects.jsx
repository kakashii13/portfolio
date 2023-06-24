import { Button, Heading, HStack, Link, Stack } from "@chakra-ui/react";
import React from "react";
import hooker from "../assets/hooker.png";
import todomaker from "../assets/todomaker.png";
import { ProjectCard } from "../components/ProjectCard";

const PROJECTS_DEFAULT = [
  {
    id: 0,
    title: "Todo Maker",
    content: "Create, complete and delete your ToDo's",
    badges: ["React JS", "Chakra UI", "Express JS", "MongoDB"],
    linkGithub: "https://github.com/kakashii13/todo-maker",
    linkDeploy: "https://todo-maker-beta.vercel.app/",
    img: todomaker,
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

export const Projects = () => {
  return (
    <Stack minH="1000px" id="projects" p="40px" spacing={10}>
      <Heading textAlign="center">(Projects)</Heading>
      {PROJECTS_DEFAULT.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
      <HStack justifyContent="center">
        <Link href="https://github.com/kakashii13?tab=repositories" isExternal>
          <Button maxW="300px">See more</Button>
        </Link>
      </HStack>
    </Stack>
  );
};
