import React from "react";
import { Text, TouchableOpacityProps } from "react-native";

import { ContainerButton, TextButton } from "./styled";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  color: string;
}

export default function Button({ color, children, ...rest }: ButtonProps) {
  return (
    <ContainerButton colorButton={color} {...rest}>
      <TextButton>{children}</TextButton>
    </ContainerButton>
  );
}
