"use client";

import { styled } from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 26px;

  padding: 28px 70px;

  background-color: rgba(0, 109, 91, 0.05);
  backdrop-filter: blur(2px);

  color: var(--white);

  .to-darker-color {
    h4, h5, a {
      color: var(--font-teal-black);
    }

    &:hover {
      h4, h5, a {
        color: var(--font-black-variant);
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const NameLinkContainer = styled.div`
  width: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    h4, h5 {
      text-decoration: underline;
      color: var(--off-white);
    }
  }

  h4 {
    font-size: var(--fz-title-sm);
    font-weight: 600;
    text-align: right;
    transition: all 500ms ease-in-out;
  }
  
  h5 {
    font-size: var(--fz-subtitle-sm);
    font-weight: 300;
    text-align: right;
    transition: all 500ms ease-in-out;
  }

  @media (min-width: 600px) {
    h4 {
      font-size: var(--fz-subtitle);
    }

    h5 {
      font-size: var(--fz-text);
    }
  }

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const PageLinksContainer = styled.div`
  display: flex;
  gap: 46px;

  a {
    font-size: var(--fz-subtitle-sm);
    font-weight: 400;
    text-align: right;
    color: var(--white);
    transition: all 500ms ease-in-out;

    cursor: pointer;

    &:hover {
      color: var(--off-white);
      text-decoration: underline;
    }
  }

  @media (min-width: 600px) {
    gap: 76px;

    a {
      font-size: var(--fz-text);
    }
  }
`;