import React, { useState } from 'react';
import * as C from "./styles"

interface IProps {
  children?: React.ReactNode;
}

export default function ProjectViewer() {
  return (
    <C.MainContainer>
      <C.SelectionListContainer>
        <li className='selected'>Age Calculator 2077</li>
        <li>Aztek Converter</li>
        <li>CRUD with Next.js</li>
      </C.SelectionListContainer>
      <C.ArrowIcon />
      <C.DisplayContainer>
        <img src="/screenshot.png" alt="Screenshot" />
      </C.DisplayContainer>
    </C.MainContainer>
  )
}