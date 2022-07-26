import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `"Roboto Mono", "sans-serif"`,
  },
  styles: {
    global: {
      "html, #root, body": {
        h: "100vh",
      },
    },
  },
});
