import React from "react";
import { Text, View } from "react-native";

import { ContainerSearchCep, TitleSearch } from "./styled";

import Input from "./src/components/TextInputBar/index";
import api from "./src/services/api";

export default function App() {
  return (
    <ContainerSearchCep>
      <TitleSearch>Hi User,</TitleSearch>
      <Input />
    </ContainerSearchCep>
  );
}
