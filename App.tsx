import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

import { ContainerSearchCep, TitleSearch, ContainerButton } from "./styled";

import Input from "./src/components/TextInputBar/index";
import Button from "./src/components/Button/Index";
import api from "./src/services/api";

export default function App() {
  const [valueCep, setValueCep] = useState<string>("");

  async function getCep(cep: any) {
    try {
      if (cep !== "") {
        const { data } = await api.get(`${cep}/json`);

        console.log(data);

        return data;
      } else {
        Alert.alert("Digite um CEP valido! 😥");
      }
    } catch (error) {
      Alert.alert("Error ao procurar o CEP 🤔, digite novamente...");
    }
  }

  return (
    <ContainerSearchCep>
      <TitleSearch>Hi User,</TitleSearch>
      <Input
        placeholder="Digite o cep"
        autoCorrect={false}
        keyboardType="numeric"
        onChangeText={(value: string) => {
          setValueCep(value);
        }}
      />
      <ContainerButton>
        <Button style={{ marginRight: 15 }} color="#FB4C4B" children="Limpar" />
        <Button
          color="#3ABEA6"
          children="Buscar"
          onPress={() => {
            getCep(valueCep);
          }}
        />
      </ContainerButton>
    </ContainerSearchCep>
  );
}
