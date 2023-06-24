import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `"Roboto Mono", "sans-serif"`,
    heading: `"Roboto Mono", "sans-serif"`,
  },
  styles: {
    global: {
      "html, #root, body": {
        bg: "gray.200",
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "black",
          color: "white",
          _hover: {
            bg: "blackAlpha.900",
          },
          _active: {
            bg: "blackAlpha.900",
          },
        },
        outline: {
          _hover: {
            bg: "gray.100",
          },
          _active: {
            bg: "gray.100",
          },
        },
      },
    },
  },
});
