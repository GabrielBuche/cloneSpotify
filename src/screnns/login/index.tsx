import React, { useMemo, useState } from 'react';
import { Container } from './styles';
import { InputEmail } from '../../components/Inputs/inputEmail';
import { BigTitle } from '../../globalStyles/Text';
import { Separator } from '../../globalStyles/utils';
import { ButtonNext } from '../../components/ButtonNext';
import { InputPassword } from '../../components/Inputs/inputPassword';

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const isButtonEnable = useMemo(() => {
        return email !== '' && senha !== '';
      }, [email, senha]);


    return (
        <Container>
            <BigTitle>E-mail ou nome de usuário</BigTitle>
            <InputEmail
                value={email}
                onChangeText={value => setEmail(value)}
            />
            <Separator />
            <BigTitle>Senha</BigTitle>
            <InputPassword
                value={senha}
                onChangeText={value => setSenha(value)}
            />
            <Separator />
            <ButtonNext title="Entrar" disabled={!isButtonEnable} />
        </Container>
    )
}