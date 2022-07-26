import React from "react";
import { Icon, Stack } from "@chakra-ui/react";
import { Main } from "../components/Main";
import { NavBar } from "../components/NavBar";
import { RiArrowDownSLine } from "react-icons/ri";

export const Home = () => {
  return (
    <Stack h="100vh" position="relative">
      <NavBar />
      <Main />
      <Icon
        as={RiArrowDownSLine}
        h="30px"
        w="30px"
        position="absolute"
        bottom="2"
        left="50%"
      />
    </Stack>
  );
};
