import React from 'react';
import * as C from "./styles";

interface IProps {
  children?: React.ReactNode;
}

export default function Footer(props: IProps) {
  return (
    <C.FooterContainer id="footer">
      <C.ContactsContainer>
        <C.ContactBox>
          <img src="/github-offwhite.png" alt="Github icon" title="Github" />
          <h3>@santosesantos</h3>
        </C.ContactBox>
        <C.ContactBox>
          <img src="/phone-offwhite.png" alt="Phone icon" title="Phone" />
          <h3>(31) 9 7143 - 4678</h3>
        </C.ContactBox>
        <C.ContactBox $spanColumns>
          <img src="/email-offwhite.png" alt="Email icon" title="Email" />
          <h3>bp.santosesantos@gmail.com</h3>
        </C.ContactBox>
      </C.ContactsContainer>
      <hr />
      <C.PageLinksContainer>
        <a href="#">Início</a>
        <a href="#projects">Projetos</a>
        <a href="#aboutme">Sobre mim</a>
      </C.PageLinksContainer>
    </C.FooterContainer>
  )
}