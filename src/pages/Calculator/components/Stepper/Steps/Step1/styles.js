import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid #000;
  background: #48426e;

  h1.title {
    color: #fff;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 16px;
  }

  form.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
  }

  button.button-submit {
    border-radius: 5px;
    border: 1px solid #000;
    background: #6d5bd0;
    padding: 16px 32px;
    margin-top: 16px;
    align-self: flex-end;
    cursor: pointer;

    color: #fff;

    &:disabled {
      background-color: #C6C2DE;
      border: 1px solid #C6C2DE;
      cursor: default;
    }
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

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
