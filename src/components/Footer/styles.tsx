"use client";

import { styled } from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 35px 16px;

  background: linear-gradient(180deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  color: var(--off-white);

  hr {
    width: 760px;

    border: 1px solid var(--secondary-color);
    background: var(--secondary-color);
  }
`;

export const ContactsContainer = styled.div`
  width: 565px;

  display: grid;
  grid-template: max-content max-content / 1fr 1fr;
  justify-content: space-between;
  align-items: center;
`;

export const ContactBox = styled.div<{ $spanColumns?: boolean; }>`
  ${props => props.$spanColumns ? "grid-column-start: span 2;" : ""}

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  padding: 16px 12px;

  img {
    width: 32px;

    filter: drop-shadow(-1px 2px 4px rgba(65, 180, 161, 0.60));
  }

  h3 {
    font-size: var(--fz-title);
    font-weight: 400;
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
    font-size: var(--fz-subtitle);
    font-weight: 300;
    color: var(--off-white);

    cursor: pointer;

    &:hover {
      color: var(--white);
      text-decoration: underline;
    }
  }
`