import { TouchableOpacity } from "react-native";
import { StyledComponent } from "styled-components";
import styled, { css, DefaultTheme } from "styled-components/native";
import { colors } from "../../../styles/themes/colors";

interface Variation {
  color?: "primary" | "green";
}

export const Container = styled.View`
  padding: 8px;
`;

export const ButtonTouchable: StyledComponent<
  typeof TouchableOpacity,
  DefaultTheme,
  Variation,
  never
> = styled.TouchableOpacity`
  border-radius: 8px;
  ${(props: Variation) => {
    switch (props.color) {
      case "green":
        return css`
          background-color: ${colors.green.primary};
        `;
      default:
        return css`
          background-color: ${colors.blue.primary};
        `;
    }
  }}
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
`;

export const CreateNewProposalButton = styled(ButtonTouchable)`
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Report = styled(ButtonTouchable)`
  height: 40px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
