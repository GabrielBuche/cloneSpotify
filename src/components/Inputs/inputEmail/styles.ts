import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 15px;
`;

export const Input =styled.TextInput`
    width: 100%;
    height: 45px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.secundaria};
    color: ${({ theme }) => theme.colors.text}; 
    padding-left: 15px;
    padding-right: 15px;
`; 