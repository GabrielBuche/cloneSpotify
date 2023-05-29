import  styled  from "styled-components/native";

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  text-align: center;
`;

export const TitleBtn = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  text-align: center;
  justify-content: center;
`;
export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-align: center;
`;

export const TitleDark = styled.Text`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 16px;
  text-align: center;
`;
export const SubtitlteDark = styled.Text`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 14px;
  text-align: center;
`;
