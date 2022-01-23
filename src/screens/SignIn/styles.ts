import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";



export const Container = styled.View`
flex: 1;

`;

export const Header = styled.View`

width: 100%;

background-color: ${({theme})=> theme.colors.primary};

justify-content: flex-end;
align-items: center;
`;

export const TitleWrapper = styled.View`
align-items: center;

`;

export const Title = styled.Text`
font-family:  ${({theme})=> theme.fonts.medium}; 
color:  ${({theme})=> theme.colors.shape};
font-size: ${RFValue(30)}px;
`;

export const SigInTitle = styled.Text``;

export const Footer = styled.View``;
