"use client";

import React, { useEffect, useState, useCallback } from 'react';
import * as C from "./styles";

interface IProps {
  children?: React.ReactNode;
}

export default function Navbar(props: IProps) {
  const [isDarkColor, setIsDarkColor] = useState(false);

  function verifyY() {
    const projectY = document.getElementById("projects")?.getBoundingClientRect().top || 900;
    if (window.screenY >= projectY) {
      setIsDarkColor(true);
    } else {
      setIsDarkColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", verifyY)
    window.addEventListener("click", verifyY)
    return () => {
      window.removeEventListener("scroll", verifyY)
      window.removeEventListener("click", verifyY)
    }
  }, []);

  return (
    <>
      <C.NavContainer>
        <C.NameLinkContainer className={isDarkColor ? "to-darker-color" : ""} onClick={() => window.location.href = "/"}>
          <h4>Bruno Santos e Santos</h4>
          <h5>Desenvolvedor Front-end</h5>
        </C.NameLinkContainer>
        <C.PageLinksContainer className={isDarkColor ? "to-darker-color" : ""}>
          <a href='#projects'>Projetos</a>
          <a href='#aboutme'>Sobre mim</a>
          <a href='#footer'>Contato</a>
        </C.PageLinksContainer>
      </C.NavContainer>
    </>
  );
}