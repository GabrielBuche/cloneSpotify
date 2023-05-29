import React from 'react';
import {
    Container,
    ContainerTitle,
    Gradient,
    LogoContainer,
    ViewBtn,
    BtnFollowFree,
    UpperContent,
    LowerContent,
    BtnLogin
} from './styles'
import { Title, TitleDark } from '../../globalStyles/Text'

import { ButtonLogin } from '../../components/buttonLogin';

import Logo from '../../assets/Logo.svg';

export function Login() {
    return (
        <Container>
            <Gradient
                colors={['#c7c7c7', '#2c2c2c']}
                end={{ x: 0.5, y: 0.3 }}
                locations={[0.0001, 0.5]}
            />
            <UpperContent>
                <LogoContainer >
                    <Logo />
                </LogoContainer>
                <ContainerTitle>
                    <Title>Milhões de música à sua escolha.</Title>
                    <Title> Grátis no Spotify.</Title>
                </ContainerTitle>
            </UpperContent>
            <LowerContent>
                <ViewBtn>
                    <BtnFollowFree>
                        <TitleDark>Inscreva-se grátis</TitleDark>
                    </BtnFollowFree>
                    <ButtonLogin
                        color='white'
                        iconFeather='smartphone'
                        title='Continuar com número de telefone'
                    />
                    <ButtonLogin
                        color='red'
                        iconMaterialCommunity='google'
                        title='Continuar com Google'
                    />
                    <ButtonLogin
                        color='blue'
                        title='Continuar com Facebook'
                        iconMaterialCommunity='facebook'
                    />
                    <BtnLogin >
                        <Title>Entrar</Title>
                    </BtnLogin>
                </ViewBtn>
            </LowerContent>
        </Container>
    );
};


