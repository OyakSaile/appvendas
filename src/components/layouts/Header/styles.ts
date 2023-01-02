import styled from "styled-components/native";
import { colors } from "../../../styles/themes/colors";

export const Container = styled.View`
  background: ${colors.blue.primary};
  height: 60px;
  width: 100%;
  padding-left: 10px;
  justify-content: center;
`;

export const PageTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
