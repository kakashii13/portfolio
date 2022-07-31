import { Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const ICONS = [
  { icon: IoLogoHtml5, color: "#e34c26" },
  { icon: IoLogoCss3, color: "#2965f1" },
  { icon: IoLogoJavascript, color: "#f0db4f" },
  { icon: FaReact, color: "#61dbfb" },
  { icon: FaGitAlt, color: "#f34f29" },
  { icon: IoLogoFirebase, color: "#ffa611" },
  { icon: SiTypescript, color: "#007acc" },
];

export const Tech = () => {
  return (
    <Stack minH="400px" py="100px" spacing={10} id="tech">
      <Heading textAlign="center">Tech ( )</Heading>
      <Text textAlign="center">I use this tech for create my websites</Text>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(7, 1fr)"]}
        justifyItems="center"
        gap={3}
        w="auto"
      >
        {ICONS.map(({ icon, color }) => (
          <Icon
            key={icon}
            as={icon}
            h="60px"
            w="60px"
            _hover={{ color: color, transition: ".5s" }}
          />
        ))}
      </Grid>
    </Stack>
  );
};
