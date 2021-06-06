import React from "react";
import { TextInputProps } from "react-native";

import { ContainerInput, Input, TextInput } from "./styled";

interface InputProps extends TextInputProps {
  label: string;
}

export default function InputSearch({ label, ...rest }: InputProps) {
  return (
    <ContainerInput>
      <TextInput>{label}</TextInput>
      <Input {...rest} />
    </ContainerInput>
  );
}
