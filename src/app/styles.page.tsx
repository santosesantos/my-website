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
    width: 250px;

    font-size: var(--fz-super-title-sm);
    font-weight: 700;
    text-align: center;
  }
  
  h2 {
    width: 300px;

    font-size: var(--fz-super-subtitle-sm);
    font-weight: 300;
    text-align: center;
  }

  @media (min-width: 600px) {
    h1 {
      width: 454px;
      font-size: var(--fz-super-title);
    }

    h2 {
      width: 610px;
      font-size: var(--fz-super-subtitle);
    }
  }

  @media (min-width: 768px) {
    height: 110vh;
  }
  
  @media (min-width: 1200px) {
    height: 100vh;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 740px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 110px;

  background-color: var(--white);

  @media (min-width: 992px) {
    padding-top: 0;
  }
`;

export const AboutMeContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template: "title" auto
                 "picture" auto
                 "texts" auto / max-content;
  justify-content: center;
  align-items: center;
  row-gap: 28px;

  padding: 150px 131px 96px 131px;

  background-color: var(--off-white);
  color: var(--font-teal-black);

  @media (min-width: 992px) {
    padding-top: 100px;
  }

  @media (min-width: 1200px) {
    grid-template: "title ." 1fr
                 "texts picture" 3fr / 1fr 1fr;

    padding-top: 88px;
  }
`;

export const AboutMeTitleContainer = styled.div`
  grid-area: title;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;

  justify-items: center;

  font-weight: 400;
  font-style: italic;

  h2 {
    font-size: var(--fz-super-title-sm);
    
    @media (min-width: 768px) {
      font-size: var(--fz-super-subtitle);
    }
    
    @media (min-width: 1200px) {
      justify-self: flex-start;
    }
  }

  :nth-child(2) {
    width: 20%;
    height: 1px;

    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);

    @media (min-width: 600px) {
      width: 25%;
    }

    @media (min-width: 1200px) {
      width: 340px;

      justify-self: flex-start;
    }
  }
  
  h3 {
    font-size: var(--fz-super-subtitle-sm);
    
    margin-top: 16px;

    @media (min-width: 768px) {
      font-size: var(--fz-title);
    }

    @media (min-width: 1200px) {
      justify-self: flex-end;

      margin-top: 10px;
    }
  }

  :nth-child(4) {
    width: 25%;
    height: 2px;

    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    margin-top: 25px;

    @media (min-width: 600px) {
      width: 30%;
    }

    @media (min-width: 992px) {
      width: 35%;
    }

    @media (min-width: 1200px) {
      width: 550px;

      justify-self: flex-start;
    }
  }

  @media (min-width: 1200px) {
    padding-left: 42px;
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
  font-weight: 400;

  p {
    width: 25%;

    strong {
      font-weight: 600;
    }
  }

  :nth-child(4) {
    letter-spacing: -0.426px;
  }

  @media (min-width: 600px) {
    p {
      width: 35%;
    }
  }

  @media (min-width: 768px) {
    p {
      width: 40%;
    }
  }

  @media (min-width: 1200px) {
    p {
      min-width: 550px;
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