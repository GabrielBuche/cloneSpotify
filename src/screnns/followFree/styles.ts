import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 14px;
`;

export const TitleDark = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 26px;
  margin-top: 12px;
`;

export const ViewSubtitle = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;