import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 9998;

  > .content {
    width: 80%;
    max-height: 60vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  overflow: hidden;
  border-radius: 16px;
  border: 3px solid #8b83ba;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    padding: 32px;
    width: 100%;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr;
    gap: 60px;

    .texts {
      display: flex;
      flex-direction: column;
      span {
        color: #8b83ba;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.6px;
      }
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px;
    gap: 32px;

    button {
      color: #fff;
      font-family: Inter;
      font-size: 33px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 3.3px;
      text-transform: capitalize;
      background: #8b83ba;
      cursor: pointer;
      padding: 12px;
      border-radius: 48px 0px;
      border: none;
    }
  }
`;

export const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="133"
    height="111"
    viewBox="0 0 133 111"
    fill="none"
  >
    <path
      d="M0.0429688 110.625L66.5013 0.583252L132.96 110.625H0.0429688ZM66.5013 93.2499C68.2131 93.2499 69.649 92.6939 70.809 91.5819C71.969 90.4699 72.547 89.0954 72.543 87.4583C72.543 85.8173 71.963 84.4408 70.803 83.3288C69.643 82.2168 68.2091 81.6627 66.5013 81.6666C64.7895 81.6666 63.3536 82.2226 62.1936 83.3346C61.0336 84.4466 60.4556 85.8211 60.4596 87.4583C60.4596 89.0992 61.0396 90.4757 62.1996 91.5877C63.3596 92.6997 64.7935 93.2538 66.5013 93.2499ZM60.4596 75.8749H72.543V46.9166H60.4596V75.8749Z"
      fill="#8B83BA"
    />
  </svg>
);
