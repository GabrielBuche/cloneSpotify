import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const UpperContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LowerContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
`;

export const ContainerTitle = styled.View`
  justify-content: center;
  align-items: center;
  top: 100px;
`;

export const ViewBtn = styled.View`
  margin: 15px;
  padding: 25px;
  width: 100%;
`;

export const BtnFollowFree = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 45px;
  border-radius: 30px;
`;

export const BtnLogin = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
`;