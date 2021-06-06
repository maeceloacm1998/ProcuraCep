import React, { useEffect, useState } from "react";
import { Alert, Image } from "react-native";

import {
  ContainerSearchCep,
  TitleSearch,
  ContainerButton,
  ContainerInfo,
  ContainerHome,
  TextContainerHome,
  TitleResult,
} from "./styled";

import Input from "./src/components/TextInputBar/index";
import InputGeral from "./src/components/TextInputGeral/index";
import Button from "./src/components/Button/Index";
import api from "./src/services/api";

import ImageHomeMan from "./src/image/What_man.png";
import ImageError from "./src/image/error-image.png";

interface cepValueProps {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function App() {
  const [valueCep, setValueCep] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [returnCepValue, setReturnCepValue] = useState<cepValueProps>();

  async function getCep(cep: any) {
    try {
      if (cep !== "") {
        const { data } = await api.get(`${cep}/json`);

        if (data.erro == true) {
          setShowResults(false);
          setShowError(true);
        }
        console.log(data);

        setReturnCepValue(data);
      } else {
        Alert.alert("Digite um CEP valido! 😥");
      }
    } catch (error) {
      console.log("erro", error);
      setShowResults(false);
      setShowError(true);
    }
  }

  function showContainerResults() {
    if (valueCep !== "") {
      setShowResults(true);
    }
  }

  useEffect(() => {
    if (valueCep == "") {
      setShowResults(false);
    }
  }, [valueCep]);

  return (
    <>
      <ContainerSearchCep>
        <TitleSearch>Hi User,</TitleSearch>
        <Input
          placeholder="Digite seu cep"
          autoCorrect={false}
          value={valueCep}
          keyboardType="numeric"
          onChangeText={(value: string) => {
            setValueCep(value);
          }}
        />
        <ContainerButton>
          <Button
            style={{ marginRight: 15 }}
            color="#FB4C4B"
            children="Limpar"
            onPress={() => {
              setShowResults(false);
              setShowError(false);
              setValueCep("");
            }}
          />
          <Button
            color="#3ABEA6"
            children="Buscar"
            onPress={() => {
              getCep(valueCep);
              showContainerResults();
            }}
          />
        </ContainerButton>
      </ContainerSearchCep>

      {valueCep === "" && (
        <ContainerHome>
          <Image source={ImageHomeMan} style={{ marginBottom: 20 }} />
          <TextContainerHome>" Ache o endereço </TextContainerHome>
          <TextContainerHome>com facilidade "</TextContainerHome>
        </ContainerHome>
      )}

      {showResults && (
        <ContainerInfo>
          <TitleResult>Resultdos</TitleResult>

          <InputGeral label="CEP :" value={returnCepValue?.cep} />
          <InputGeral label="Logradouro :" value={returnCepValue?.logradouro} />
          <InputGeral label="Bairro :" value={returnCepValue?.bairro} />
          <InputGeral label="Cidade :" value={returnCepValue?.localidade} />
          <InputGeral label="Estado :" value={returnCepValue?.uf} />
        </ContainerInfo>
      )}

      {showError && (
        <ContainerHome>
          <Image source={ImageError} style={{ marginBottom: 20 }} />
          <TextContainerHome>O cep "{valueCep}" </TextContainerHome>
          <TextContainerHome>náo foi encontrado.</TextContainerHome>
        </ContainerHome>
      )}
    </>
  );
}
