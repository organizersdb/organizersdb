import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  return (
    <Box sx={{ width: '100vw'}}>
      <Container maxWidth={false}>
        <Header />
        <Hero />
        <Services />
        <Projects />
        <Footer />
      </Container>
    </Box>
  );
}
