import React from 'react';
import { useNavigation } from '@react-navigation/native';
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

export function SelectLoginMethod() {
    const navigation = useNavigation();
    return (
        <Container>
            <Gradient
                colors={['#4b4b4b', '#1b1b1b']}
                end={{ x: 0.5, y: 0.3 }}
                locations={[0.1, 0.7]}
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
                    <BtnFollowFree
                         onPress={() => navigation.navigate('FollowFree' as never)}
                    >
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
                    <BtnLogin
                        onPress={() => navigation.navigate('Login' as never)}
                    >
                        <Title>Entrar</Title>
                    </BtnLogin>
                </ViewBtn>
            </LowerContent>
        </Container>
    );
};


