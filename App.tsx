import React from "react";
import { Text, View } from "react-native";

import { ContainerSearchCep, TitleSearch, ContainerButton } from "./styled";

import Input from "./src/components/TextInputBar/index";
import Button from "./src/components/Button/Index";
import api from "./src/services/api";

export default function App() {
  return (
    <ContainerSearchCep>
      <TitleSearch>Hi User,</TitleSearch>
      <Input
        placeholder="Digite o cep"
        autoCorrect={false}
        keyboardType="numeric"
      />
      <ContainerButton>
        <Button style={{ marginRight: 15 }} color="#FB4C4B" children="Limpar" />
        <Button color="#3ABEA6" children="Buscar" />
      </ContainerButton>
    </ContainerSearchCep>
  );
}
