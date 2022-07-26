import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./theme";
import { Home } from "./pages/Home";
import "@fontsource/roboto-mono";
import { Proyects } from "./pages/Proyects";
import { Technologies } from "./pages/Technologies";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="5xl">
        <Home />
        <Proyects />
        <Technologies />
      </Container>
    </ChakraProvider>
  );
};

export default App;
