import {
  Button,
  chakra,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiArrowDownSLine, RiLinkedinBoxLine } from "react-icons/ri";
import me from "../../assets/me.jpeg";
import { Link as LinkSmooth } from "react-scroll";
import { isValidMotionProp, motion } from "framer-motion";

const ButtonBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export const Main = () => {
  return (
    <VStack minH="100%" spacing={10}>
      <Stack
        boxShadow="base"
        maxW="400px"
        maxH="400px"
        border="1px solid black"
        p="10px"
        borderRadius="4px"
      >
        <Img src={me} borderRadius="4px" />
      </Stack>
      <VStack alignItems="center" maxW="auto" spacing={5} textAlign="center">
        <Heading>Hi, I'm Matias.</Heading>
        <HStack>
          <Text>Fullstack developer</Text>
        </HStack>
        <Link
          href="https://www.linkedin.com/in/matias-dominguez-b9b91a142/"
          isExternal
        >
          <Button leftIcon={<RiLinkedinBoxLine />}>Contact me</Button>
        </Link>
      </VStack>
      <ButtonBox
        animate={{ y: [10, 20, 10] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <LinkSmooth
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
            borderRadius="10px"
            cursor="pointer"
          />
        </LinkSmooth>
      </ButtonBox>
    </VStack>
  );
};
