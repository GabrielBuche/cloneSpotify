import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { Button, Separator, IconView, ViewTitle } from './styles';
import { TitleBtn } from '../../globalStyles/Text';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


interface Props extends TouchableOpacityProps {
    title: string
    iconFeather?: keyof typeof Feather['glyphMap'];
    iconMaterialCommunity?: keyof typeof MaterialCommunityIcons['glyphMap'];
    color: string
}

export function ButtonLogin({ iconMaterialCommunity, iconFeather, title, color, ...rest }: Props) {
    return (
        <>
            <Separator />
            <Button {...rest}>
                <IconView>
                    {iconFeather &&
                        <Feather name={iconFeather} size={20} color={color} />
                    }
                    {
                        iconMaterialCommunity &&
                        <MaterialCommunityIcons name={iconMaterialCommunity} size={20} color={color} />
                    }

                </IconView>

                <ViewTitle>
                    <TitleBtn>{title}</TitleBtn>
                </ViewTitle>
            </Button>
        </>
    )
}