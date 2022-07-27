import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./theme";
import { Home } from "./pages/Home";
import { Proyects } from "./pages/Proyects";
import { Tech } from "./pages/Tech";
import "@fontsource/roboto-mono";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="5xl">
        <Home />
        <Proyects />
        <Tech />
      </Container>
    </ChakraProvider>
  );
};

export default App;
