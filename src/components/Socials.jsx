import { Text, Link, VStack } from "@chakra-ui/react";

const SOCIALS = [
  {
    name: "Github",
    url: "https://github.com/kakashii13",
    // icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/matias-dominguez-b9b91a142/",
  },
];

export const Socials = () => {
  return (
    <VStack spacing={5} alignItems="start">
      {SOCIALS.map((social) => (
        <Link href={social.url} isExternal key={social.name}>
          <Text>{social.name}</Text>
        </Link>
      ))}
    </VStack>
  );
};
