import React from "react";
import { Stack } from "@chakra-ui/react";
import { Main } from "../components/Main";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <Stack h="100vh" position="relative" id="home">
      <NavBar />
      <Main />
    </Stack>
  );
};
