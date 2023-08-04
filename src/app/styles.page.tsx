"use client"

import { styled } from "styled-components"

export const PresentationContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  color: var(--white);
  background: linear-gradient(180deg, var(--primary-color) 0%, var(--secondary-color) 100%);

  img {
    width: 208px;

    filter: drop-shadow(0 4px 32px var(--secondary-color));
  }

  h1 {
    width: 454px;

    font-size: var(--fz-super-title);
    font-weight: 700;
    text-align: center;
  }
  
  h2 {
    width: 610px;

    font-size: var(--fz-super-subtitle);
    font-weight: 300;
    text-align: center;
  }
`