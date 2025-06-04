import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import me from "../assets/me.png";

export const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <HStack
      pt="40px"
      minH="30%"
      spacing={10}
      direction={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems="center"
    >
      <VStack
        alignItems={{ base: "center", md: "start" }}
        spacing={3}
        textAlign={{ base: "center", md: "start" }}
        maxW="230px"
      >
        <Heading fontSize="3xl">Matias Dominguez</Heading>
        <Text>Developer</Text>
      </VStack>

      <Box margin="0px !important">
        <Image
          src={me}
          alt="me"
          objectFit="cover"
          borderRadius="full"
          width="150px"
          height="150px"
        />
      </Box>
    </HStack>
  );
};
