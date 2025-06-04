import { Heading, Stack, VStack, Divider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials";
import { AboutMe } from "../components/AboutMe";
export const Home = () => {
  return (
    <Stack h="100vh">
      <Header />
      <VStack justifyContent="space-around" alignItems="start" spacing={10}>
        <AboutMe />
        <Divider />
        <VStack alignItems="start">
          <Heading size="lg">Projects</Heading>
          <Projects />
        </VStack>
        <Divider />
        <VStack alignItems="start">
          <Heading size="lg">Socials</Heading>
          <Socials />
        </VStack>
      </VStack>
    </Stack>
  );
};
