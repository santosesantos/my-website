"use client";

import { styled } from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 16px 8px;

  background: linear-gradient(180deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  color: var(--off-white);

  hr {
    width: 75%;

    border: 1px solid var(--secondary-color);
    background: var(--secondary-color);
  }

  @media (min-width: 1200px) {
    padding: 35px 16px;

    hr {
      width: 50%;
    }
  }
`;

export const ContactsContainer = styled.div`
  width: 75%;

  display: grid;
  grid-template: repeat(3, max-content) / 1fr;
  justify-content: space-between;
  align-items: center;

  .isLink {
    cursor: pointer;

    &:hover {
      color: var(--white);
      text-decoration: underline;
    }

    &:active {
      color: var(--off-white);
    }
  }

  @media (min-width: 768px) {
    row-gap: 16px;
  }

  @media (min-width: 992px) {
    width: 60%;

    row-gap: 0;

    grid-template: max-content max-content / 1fr 1fr;
  }
`;

export const ContactBox = styled.div<{ $spanColumns?: boolean; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  padding: 8px 6px;

  img {
    width: 26px;

    filter: drop-shadow(-1px 2px 4px rgba(65, 180, 161, 0.60));
  }

  h3 {
    font-size: var(--fz-title-sm);
    font-weight: 400;
  }

  @media (min-width: 768px) {
    img {
      width: 32px;
    }

    h3 {
      font-size: var(--fz-title);
    }
  }

  @media (min-width: 992px) {
    ${props => props.$spanColumns ? "grid-column-start: span 2;" : ""}

    padding: 16px 12px;
  }
`;

export const PageLinksContainer = styled.div`
  margin-top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 69px;

  padding: 13px 0;

  a {
    font-size: var(--fz-subtitle-sm);
    font-weight: 300;
    color: var(--off-white);

    cursor: pointer;

    &:hover {
      color: var(--white);
      text-decoration: underline;
    }
  }

  @media (min-width: 600px) {
    a {
      font-size: var(--fz-subtitle);
    }
  }
`