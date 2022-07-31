import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./theme";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Tech } from "./pages/Tech";
import { About } from "./pages/About";
import { Footer } from "./pages/Footer";
import "@fontsource/roboto-mono";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="5xl">
        <Home />
        <Tech />
        <Projects />
        <About />
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default App;
