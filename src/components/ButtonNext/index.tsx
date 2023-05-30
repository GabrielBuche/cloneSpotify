import React from 'react';

import { ButtonOpacity, Container } from './styles'
import { TitleBtnDark } from '../../globalStyles/Text';
import { TouchableOpacityProps } from 'react-native';

interface PropsBtn extends TouchableOpacityProps {
    title: string
    disabled?: boolean
}

export function ButtonNext({title, disabled, ...rest}: PropsBtn){
    return(
        <Container>
            <ButtonOpacity
             {...rest}
             disabled={disabled}
             style={{ backgroundColor: disabled ? '#8C8C8C': '#FFFFFF' }}
             >
                <TitleBtnDark>{title}</TitleBtnDark>
            </ButtonOpacity>
        </Container>
    );
}