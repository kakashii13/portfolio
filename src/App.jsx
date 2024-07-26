import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./theme";
import { Home } from "./pages/Home";
import "@fontsource/roboto-mono";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="4xl">
        <Home />
      </Container>
    </ChakraProvider>
  );
};

export default App;
