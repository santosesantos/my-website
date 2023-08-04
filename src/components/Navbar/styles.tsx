"use client";

import { styled } from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;

  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 28px 70px;

  background-color: rgba(0, 109, 91, 0.05);
  backdrop-filter: blur(2px);

  color: var(--white);
`;

export const NameLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  cursor: pointer;

  &:hover {
    h4, h5 {
      text-decoration: underline;
      color: var(--off-white);
    }
  }

  h4 {
    font-size: var(--fz-subtitle);
    font-weight: 600;
    text-align: right;
  }
  
  h5 {
    font-size: var(--fz-text);
    font-weight: 300;
    text-align: right;
  }
`;

export const PageLinksContainer = styled.div`
  display: flex;
  gap: 76px;

  a {
    font-size: var(--fz-text);
    font-weight: 400;
    text-align: right;
    color: var(--white);

    cursor: pointer;

    &:hover {
      color: var(--off-white);
      text-decoration: underline;
    }
  }
`;