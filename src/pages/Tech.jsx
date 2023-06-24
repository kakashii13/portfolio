import { Grid, Heading, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
} from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";

const ICONS = [
  { icon: IoLogoHtml5, color: "#e34c26", name: "HTML" },
  { icon: IoLogoCss3, color: "#2965f1", name: "CSS" },
  { icon: IoLogoJavascript, color: "#f0db4f", name: "JavaScript" },
  { icon: FaReact, color: "#61dbfb", name: "React" },
  { icon: IoLogoNodejs, color: "#4ca800", name: "Node JS" },
  { icon: SiExpress, color: "#b3adad", name: "Express JS" },
  { icon: SiMongodb, color: "#1d8b13", name: "Mongo DB" },
];

export const Tech = () => {
  return (
    <Stack minH="400px" py="100px" spacing={10} id="tech">
      <Heading textAlign="center">(Tech)</Heading>
      <Text textAlign="center">I use this tech to create my websites</Text>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(7, 1fr)"]}
        justifyItems="center"
        gap={3}
        w="auto"
      >
        {ICONS.map(({ name, icon, color }) => (
          <VStack key={name}>
            <Icon
              as={icon}
              h="60px"
              w="60px"
              _hover={{ color: color, transition: ".5s" }}
            />
            <Text fontSize="12px" color="gray.600">
              {name}
            </Text>
          </VStack>
        ))}
      </Grid>
    </Stack>
  );
};
