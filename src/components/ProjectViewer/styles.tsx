"use client";

import { styled } from "styled-components";

export const MainContainer = styled.div`
  width: max-content;
  height: max-content;

  display: flex;
  justify-content: center;
  align-items: center;

  :nth-child(2) {
    margin-left: -1px;
  }
`;

export const SelectionListContainer = styled.div`
  width: 500px;
  
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 36px;
  
  padding: 16px;

  border-radius: var(--border-radius);
  background-color: var(--off-white);
  box-shadow: -1px 5px 12px 1px #297065;
  color: var(--font-teal-black);

  font-size: var(--fz-title);
  font-weight: 300;

  .selected {
    font-weight: 400;
    background-color: var(--primary-color);
    color: var(--off-white);
    box-shadow: inset 2px 4px 8px var(--font-black);
  }

  label {
    cursor: pointer;
    width: 100%;

    border-radius: 5px;

    padding: 6px;

    &:hover {
      background-color: var(--primary-color);
      color: var(--white);
      box-shadow: 1px 2px 6px var(--font-black);
    }

    &:active {
      background-color: var(--primary-color);
      color: var(--off-white);
      box-shadow: inset 2px 4px 8px var(--font-black);
    }

    input {
      display: none;
    }
  }
`;

export const ArrowIcon = () => {
  return (
    <svg width="146" height="53" viewBox="0 0 146 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Arrow 1" d="M144.473 29.2158C145.84 27.849 145.84 25.6329 144.473 24.2661L122.199 1.99223C120.832 0.625395 118.616 0.625395 117.249 1.99223C115.882 3.35906 115.882 5.57514 117.249 6.94198L137.048 26.741L117.249 46.54C115.882 47.9068 115.882 50.1229 117.249 51.4897C118.616 52.8565 120.832 52.8565 122.199 51.4897L144.473 29.2158ZM0.997803 30.241H141.998V23.241H0.997803V30.241Z" fill="#1A1A1A" />
    </svg>
  );
};

export const DisplayContainer = styled.div`
  max-width: 500px;
  
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
  
  padding: 10px 30px;

  border-radius: var(--border-radius);
  background-color: var(--off-white);
  box-shadow: -1px 5px 12px 1px #297065;

  .changing {
    opacity: 0;
    transition: all 1000ms ease-in-out;
  }

  img {
    width: 100%;

    opacity: 1;
    border-radius: var(--border-radius);

    cursor: pointer;

    transition: all 1000ms ease-in-out;
  }
`;