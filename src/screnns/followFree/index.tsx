import React, { useState } from 'react';
import { Container, TitleDark, ViewSubtitle } from './styles';

import { InputEmail } from '../../components/Inputs/inputEmail';
import { SubTitle } from '../../globalStyles/Text';
import { Separator } from '../../globalStyles/utils'
import { ButtonNext } from '../../components/ButtonNext';

export function FollowFree() {
    const [email, setEmail] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    function handleEmailChange(text: string){
        setEmail(text);
        setIsButtonEnabled(text !== '');
    };

    function handleNextButtonPress (){

    };


    return (
        <Container>
            <TitleDark>Qual é o seu e-mail?</TitleDark>
            <InputEmail
                value={email}
                onChangeText={handleEmailChange}
            />
            <ViewSubtitle>
                <SubTitle>Você vai ter que confirmar esse e-mail mais tarde.</SubTitle>
            </ViewSubtitle>
            <Separator />
            <ButtonNext
                title="Avançar"
                onPress={handleNextButtonPress}
                disabled={!isButtonEnabled}
            />
        </Container>
    )
}   