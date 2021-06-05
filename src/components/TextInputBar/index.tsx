import React from "react";
import { TextInputProps } from "react-native";

import { ContainerInput, Input, ImageInput } from "../TextInputBar/styled";
import IconSearch from "../../image/buttonSearch.png";

export default function InputSearch({ ...rest }: TextInputProps) {
  return (
    <ContainerInput>
      <Input {...rest} />
      <ImageInput source={IconSearch} />
    </ContainerInput>
  );
}
