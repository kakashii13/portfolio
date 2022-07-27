import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" py="30px">
      <Text fontWeight="bold" fontSize="20px">
        MD
      </Text>
      <HStack>
        <Link>Home</Link>
        <Link
          activeClass="active"
          to="proyects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Proyects
        </Link>
      </HStack>
    </HStack>
  );
};
