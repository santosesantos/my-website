"use client";

import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import * as C from "./styles";

interface IProps {
  children?: React.ReactNode;
}

export default function Footer(props: IProps) {
  function scrollSmoothly(target: string) {
    scroll.scrollTo(document.getElementById(target)?.offsetTop ?? 0, {
      duration: 1000,
      smooth: "easeInOutQuint"
    });
  }

  return (
    <C.FooterContainer id="footer">
      <C.ContactsContainer>
        <C.ContactBox>
          <img src="/assets/icons/github-offwhite.png" alt="Github icon" title="Github" />
          <h3>@santosesantos</h3>
        </C.ContactBox>
        <C.ContactBox>
          <img src="/assets/icons/phone-offwhite.png" alt="Phone icon" title="Phone" />
          <h3>(31) 9 7143 - 4678</h3>
        </C.ContactBox>
        <C.ContactBox $spanColumns>
          <img src="/assets/icons/email-offwhite.png" alt="Email icon" title="Email" />
          <h3>bp.santosesantos@gmail.com</h3>
        </C.ContactBox>
      </C.ContactsContainer>
      <hr />
      <C.PageLinksContainer>
        <a onClick={() => scrollSmoothly("")}>Início</a>
        <a onClick={() => scrollSmoothly("projects")}>Projetos</a>
        <a onClick={() => scrollSmoothly("aboutme")}>Sobre mim</a>
      </C.PageLinksContainer>
    </C.FooterContainer>
  )
}