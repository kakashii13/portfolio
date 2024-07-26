import { extendTheme } from "@chakra-ui/react";
import "@fontsource/courier-prime";

export const theme = extendTheme({
  fonts: {
    body: `"Courier Prime", "monospace"`,
    heading: `"Courier Prime", "monospace"`,
  },
  styles: {
    global: {
      "html, #root, body": {
        color: "whiteAlpha.800",
        bg: "blackAlpha.500",
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
