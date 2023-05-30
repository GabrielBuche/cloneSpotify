import React from 'react';

import { Container, Input } from './styles';
import { TextInputProps } from 'react-native';
import { SubTitle } from '../../../globalStyles/Text';

interface InputEmailProps extends TextInputProps {

}

export function InputEmail(props: InputEmailProps) {

    return (
        <Container>
            <Input
                {...props}
                keyboardType="email-address"
            />
        </Container>
    )
}