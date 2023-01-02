import { Text, SafeAreaView } from "react-native";
import { Content } from "../../components/layouts/Content";
import { Header } from "../../components/layouts/Header";
import { Footer } from "../../components/layouts/Footer";

import { Container } from "./styles";

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};
