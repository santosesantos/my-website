"use client"

import React from 'react';
import * as C from "./styles";

interface IProps {
  children?: React.ReactNode;
}

export default function Navbar(props: IProps) {
  return (
    <C.NavContainer>
      <C.NameLinkContainer onClick={() => window.location.href="/"}>
        <h4>Bruno Santos e Santos</h4>
        <h5>Desenvolvedor Front-end</h5>
      </C.NameLinkContainer>
      <C.PageLinksContainer>
        <a href='#projects'>Projetos</a>
        <a href='#aboutme'>Sobre mim</a>
        <a href='#footer'>Contato</a>
      </C.PageLinksContainer>
    </C.NavContainer>
  )
}