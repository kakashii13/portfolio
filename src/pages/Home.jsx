import React from "react";
import { Icon, Stack } from "@chakra-ui/react";
import { Main } from "../components/Main";
import { NavBar } from "../components/NavBar";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <Stack h="100vh" position="relative" id="home">
      <NavBar />
      <Main />
      <Link
        activeClass="active"
        to="tech"
        smooth={true}
        spy={true}
        offset={50}
        duration={500}
      >
        <Icon
          as={RiArrowDownSLine}
          h="30px"
          w="30px"
          color="white"
          bg="black"
          position="absolute"
          bottom="2"
          left="49%"
          borderRadius="10px"
          cursor="pointer"
        />
      </Link>
    </Stack>
  );
};
