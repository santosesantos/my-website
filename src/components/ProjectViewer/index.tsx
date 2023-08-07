"use client";

import React, { useEffect, useState } from 'react';
import * as C from "./styles";

interface IProps {
  children?: React.ReactNode;
}

class Project {
  src: string;
  title: string;
  url: string;

  constructor(src: string, title: string, url: string) {
    this.src = src;
    this.title = title;
    this.url = url;
  }
}

export default function ProjectViewer() {
  const sources = [
    new Project("/assets/imgs/screenshot.png", "Age Calculator 2077", "https://santosesantos.github.io/age-calculator-2077/"),
    new Project("/assets/imgs/test_screenshot.png", "Aztek Converter", "/"),
    new Project("/assets/imgs/test_screenshot.png", "My Wolf", "/")
  ];

  const [imgSrc, setImgSrc] = useState(sources[0].src);
  const [imgTitle, setImgTitle] = useState(sources[0].title);
  const [imgUrl, setImgUrl] = useState(sources[0].url);
  const [isChanging, setIsChanging] = useState(false);
  const [radioBtns, setRadioBtns] = useState<NodeListOf<HTMLInputElement>>();

  function handleCheck(evt: React.ChangeEvent<HTMLInputElement>) {
    radioBtns?.forEach(radioBtn => {
      if (radioBtn.checked) {
        radioBtn.parentElement?.classList.contains("selected") ? null : radioBtn.parentElement?.classList.add("selected");
      } else {
        radioBtn.parentElement?.classList.contains("selected") ? radioBtn.parentElement?.classList.remove("selected") : null;
      }
    });

    const currentItem = sources[parseInt(evt.currentTarget.value)];
    setIsChanging(true);
    setTimeout(() => {
      setImgSrc(currentItem.src);
      setImgTitle(currentItem.title);
      setImgUrl(currentItem.url);
      setIsChanging(false);
    }, 1000);
  }

  useEffect(() => {
    let radioBtns = document.querySelectorAll<HTMLInputElement>("input[name=project]")
    setRadioBtns(radioBtns);
    radioBtns?.item(0).parentElement?.classList.add("selected");
  }, []);

  return (
    <C.MainContainer>
      <C.SelectionListContainer>
        <label>
          <input type='radio' name='project' value="0" onChange={handleCheck} />
          Age Calculator 2077
        </label>
        <label>
          <input type='radio' name='project' value="1" onChange={handleCheck} />
          Aztek Converter
        </label>
        <label>
          <input type='radio' name='project' value="2" onChange={handleCheck} />
          Next.js CRUD
        </label>
      </C.SelectionListContainer>
      <C.ArrowIcon />
      <C.DisplayContainer>
        <img className={isChanging ? "changing" : ""} src={imgSrc} alt="Screenshot" title={imgTitle} onClick={() => window.location.href = imgUrl} />
      </C.DisplayContainer>
    </C.MainContainer>
  );
}