import styled from 'styled-components/native'

interface ColorButton{
  colorButton: string;
}

export const ContainerButton = styled.TouchableOpacity<ColorButton>`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 130px;
  border-radius: 12px;
  background: ${(props) => props.colorButton};
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
`;