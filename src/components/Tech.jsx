import { Icon, Text, HStack, VStack } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
} from "react-icons/io";
import {
  SiExpress,
  SiMongodb,
  SiC,
  SiCsharp,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

const ICONS = [
  { icon: IoLogoHtml5, color: "#e34c26", name: "HTML" },
  { icon: IoLogoCss3, color: "#2965f1", name: "CSS" },
  { icon: IoLogoJavascript, color: "#f0db4f", name: "JavaScript" },
  { icon: SiTypescript, color: "#5390e0", name: "TypeScript" },
  { icon: FaReact, color: "#007acc", name: "React" },
  { icon: IoLogoNodejs, color: "#4ca800", name: "Node JS" },
  { icon: SiExpress, color: "#b3adad", name: "Express JS" },
  { icon: SiMongodb, color: "#1d8b13", name: "Mongo DB" },
  { icon: SiC, color: "#114cd8", name: "C" },
  { icon: SiCsharp, color: "#9b4993", name: "C#" },
  { icon: SiPostgresql, color: "#5390e0", name: "PostgreSQL" },
];

export const Tech = () => {
  return (
    <VStack alignItems="start" pt="3">
      {ICONS.map(({ name, icon, color }) => (
        <HStack key={name}>
          <Icon
            as={icon}
            h="20px"
            w="20px"
            _hover={{ color: color, transition: ".5s" }}
          />
          <Text>{name}</Text>
        </HStack>
      ))}
    </VStack>
  );
};
