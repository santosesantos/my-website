"use client";

import { styled } from "styled-components";

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
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 740px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--white);
`;

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 800px;

  display: grid;
  grid-template: 1fr 3fr / 1fr 1fr;
  grid-template-areas: "title ."
                       "texts picture";
  justify-content: center;
  align-items: center;
  row-gap: 28px;

  padding: 88px 131px 96px 131px;

  background-color: var(--off-white);
  color: var(--font-teal-black);
`;

export const AboutMeTitleContainer = styled.div`
  grid-area: title;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;

  padding-left: 42px;

  font-weight: 400;
  font-style: italic;

  h2 {
    font-size: var(--fz-super-subtitle);
    
    justify-self: flex-start;
  }

  :nth-child(2) {
    width: 381px;
    height: 1px;

    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);

    justify-self: flex-start;
  }
  
  h3 {
    font-size: var(--fz-title);
    
    justify-self: flex-end;

    margin-top: 10px;
  }

  :nth-child(4) {
    width: 550px;
    height: 2px;

    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    justify-self: flex-start;

    margin-top: 25px;
  }
`

export const AboutMeTextsContainer = styled.div`
  grid-area: texts;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 43px;

  padding: 20px 42px;
  padding-left: 42px;

  font-size: var(--fz-subtitle);

  p {
    min-width: 550px;

    strong {
      font-weight: 600;
    }
  }
`

export const AboutMePicture = styled.img`
  grid-area: picture;
  justify-self: center;

  width: 398px;
  height: 480px;

  object-fit: cover;

  border-radius: 60px;

  box-shadow: -1px 5px 12px 1px #297065;
`