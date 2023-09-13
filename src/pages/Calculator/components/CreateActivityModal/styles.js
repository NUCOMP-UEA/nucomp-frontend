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

  header.header {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button.close {
      background: #8b83ba;
      padding: 4px;
      border-bottom-left-radius: 16px;
      border: none;
      cursor: pointer;
    }
  }

  main {
    padding: 16px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 16px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  label {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  input {
    border-radius: 8px;
    border: 2px solid #6e6893;
    background: #fff;
    box-shadow: 0px 0px 4px 0px rgba(23, 25, 28, 0.05);
    padding: 12px 16px;
    width: 100%;
    outline: none;

    &::placeholder {
      color: #c6c2de;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
