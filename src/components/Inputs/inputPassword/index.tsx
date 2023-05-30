import React, { useState } from 'react';
import { Container, Input, IconButton, InputArea } from './styles'
import { TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputPasswordProps extends TextInputProps { }

export function InputPassword({ ...rest }: InputPasswordProps) {

    const [ pressedEye, setPressedEye] = useState<boolean>(false)

    return (
        <Container >
            <InputArea>
                <Input
                    {...rest}
                    secureTextEntry={pressedEye}
                />
                <IconButton
                    onPress={() => setPressedEye(!pressedEye)}
                >
                    <Ionicons name={pressedEye ? "eye" : "eye-off"} size={24} color="white" />
                </IconButton>
            </InputArea>
        </Container>
    )
}