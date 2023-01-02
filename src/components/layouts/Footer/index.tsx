import { Text } from "react-native";
import {
  ButtonText,
  Container,
  CreateNewProposalButton,
  Report,
} from "./styles";

export const Footer: React.FC = () => {
  return (
    <Container>
      <CreateNewProposalButton>
        <ButtonText>Nova Proposta</ButtonText>
      </CreateNewProposalButton>

      <Report color="green">
        <ButtonText>Relatório</ButtonText>
      </Report>
    </Container>
  );
};
