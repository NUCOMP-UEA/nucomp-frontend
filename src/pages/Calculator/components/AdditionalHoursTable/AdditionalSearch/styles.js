import { styled } from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  border: 1px solid #6d5bd0;
  background: #fff;
  padding: 8px;
  display: flex;
  align-items: center;

  button.button-search {
    background-color: transparent;
    border: none;
    height: 20px;
    cursor: pointer;
    svg {
      height: 20px;
    }
  }

  input.input-search {
    outline: none;
    border: none;
    color: #6E6893;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    width: 200px;
    height: 100%;
  }
`;
