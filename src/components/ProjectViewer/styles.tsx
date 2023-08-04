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

export const SelectionListContainer = styled.ul`
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

  list-style: none;
  font-size: var(--fz-title);
  font-weight: 300;

  .selected {
    font-weight: 400;
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
  width: 500px;
  
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
  
  padding: 10px 30px;

  border-radius: var(--border-radius);
  background-color: var(--off-white);
  box-shadow: -1px 5px 12px 1px #297065;

  img {
    width: 100%;
    border-radius: var(--border-radius);
  }
`