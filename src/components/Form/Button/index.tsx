import React from "react";
import { RectButtonProperties,RectButton } from "react-native-gesture-handler";
import { Container, Title } from "./styles";
 

interface Props extends RectButtonProperties {
  title: string;
  onPress: () => void;
}

export function Button({ onPress, title, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
