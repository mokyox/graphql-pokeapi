import { Container } from "@chakra-ui/layout";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import PokemonCard from "../components/PokemonCard";

const Index = () => (
  <Container maxW="xl" centerContent>
    <PokemonCard />
    <DarkModeSwitch />
  </Container>
);

export default Index;
