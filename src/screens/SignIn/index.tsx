import React from "react";

import {
     Container,
     Header,
     TitleWrapper,
     Title,
     SigInTitle,
     Footer,


} from "./styles";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
         <LogoSvg 
         width={RFValue(200)}
          height={RFValue(200)}
           />
          <Title>Controle suas finanças de forma muito simples</Title>

          
        </TitleWrapper>

        <SigInTitle>Faça seu login com uma das contas abaixo</SigInTitle>
      </Header>
      <Footer>

      </Footer>
    </Container>
  );
}
