import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 15px;

`;

export const Input = styled.TextInput`
    width: 85%;
    height: 45px;
    padding: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text}; 
`;

export const InputArea = styled.View`
    flex-direction: row;
    width:100%;
    background-color: ${({ theme }) => theme.colors.secundaria};
    padding-left: 15px;
    border-radius: 8px;
`;

export const IconButton = styled.TouchableOpacity`
  justify-content: center;
`;