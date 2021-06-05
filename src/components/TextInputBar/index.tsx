import React from "react";
import { Text, TextInput } from "react-native";

import { ContainerInput, ImageInput } from "../TextInputBar/styled";
import IconSearch from "../../image/buttonSearch.png";

export default function App() {
  return (
    <ContainerInput>
      <TextInput />
      <ImageInput source={require(IconSearch)} />
    </ContainerInput>
  );
}
