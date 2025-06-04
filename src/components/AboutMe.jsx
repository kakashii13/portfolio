import { Box, Image, Text } from "@chakra-ui/react";
import hand from "../assets/hand.png";
import plant from "../assets/plant.png";

export const AboutMe = () => {
  return (
    <Box
      fontSize="lg"
      textAlign="justify"
      display="flex"
      flexDirection="column"
      gap={5}
    >
      <Text>
        Hey!
        <Image
          src={hand}
          width="20px"
          height="20px"
          display="inline"
          verticalAlign="middle"
          ml="4px"
          mr="4px"
          alt="waving hand"
        />
        I'm Matias, a{" "}
        <Text fontWeight="bold" as="span">
          software developer
        </Text>{" "}
        from Argentina. I'm currently studying at UAI and learning more about
        how to build cool and useful software.
      </Text>

      <Text>
        I’m into coding, leadership stuff, and plants
        <Image
          src={plant}
          width="20px"
          height="20px"
          display="inline"
          verticalAlign="middle"
          ml="4px"
          mr="4px"
          alt="plant"
        />
        (yes, really). I learn fast, love solving problems, and I'm always up
        for a new challenge.
      </Text>
    </Box>
  );
};
