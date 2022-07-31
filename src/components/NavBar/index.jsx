import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" py="30px">
      <Text fontWeight="bold" fontSize="20px">
        MD
      </Text>
      <HStack spacing={5}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Text
            cursor="pointer"
            color="blackAlpha.800"
            _hover={{ color: "black" }}
          >
            Home
          </Text>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text
            cursor="pointer"
            color="blackAlpha.800"
            _hover={{ color: "black" }}
          >
            Projects
          </Text>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Text
            cursor="pointer"
            color="blackAlpha.800"
            _hover={{ color: "black" }}
          >
            About
          </Text>
        </Link>
      </HStack>
    </HStack>
  );
};
