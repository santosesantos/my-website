"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {animateScroll as scroll} from "react-scroll";
import * as C from "./styles";

interface IProps {
  children?: React.ReactNode;
}

export const scrollSmoothly = (target: string) => {
  scroll.scrollTo(document.getElementById(target)?.offsetTop ?? 0, {
    duration: 1000,
    smooth: "easeInOutQuint"
  });
}

export default function Navbar(props: IProps) {
  const router = useRouter();
  const [isDarkColor, setIsDarkColor] = useState(false);

  function verifyY() {
    const projectY = document.getElementById("projects")?.offsetTop ?? 835;
    if (window.scrollY >= projectY) {
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
        <C.NameLinkContainer className={isDarkColor ? "to-darker-color" : ""} onClick={() => router.replace("/")}>
          <h4>Bruno Santos e Santos</h4>
          <h5>Desenvolvedor Front-end & Android</h5>
        </C.NameLinkContainer>
        <C.PageLinksContainer className={isDarkColor ? "to-darker-color" : ""}>
          <a onClick={() => scrollSmoothly("projects")}>Projetos</a>
          <a onClick={() => scrollSmoothly("aboutme")}>Sobre mim</a>
          <a onClick={() => scrollSmoothly("footer")}>Contato</a>
        </C.PageLinksContainer>
      </C.NavContainer>
    </>
  );
}