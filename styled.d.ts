import 'styled-components/native'


declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primary1: string
      primary2: string
      secundaria1: string
      secundaria2: string
      secundaria: string
      background: string
      light: string
      light2: string
      danger: string
      sucess: string
      text: string
      textDark: string
    };
  }
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}