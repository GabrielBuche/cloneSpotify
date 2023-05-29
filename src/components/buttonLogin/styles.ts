import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Button = styled(TouchableOpacity)`
    background-color: transparent;
    flex-direction: row;
    height: 45px;
    width: 100%;
    border-radius: 30px;
    border-color: ${({ theme }) => theme.colors.light};
    border-width: 0.5px;
    padding: 10px;
`;

export const ViewTitle = styled.View`
    justify-content: center;
    align-items: center;
    flex: 9;
`;

export const IconView = styled.View`

    margin-right: 3px;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    
`;

export const Separator = styled.View`
    margin: 5px;
`;



