import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
`;

export const StepperOption = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  svg {
  }

  ${(props) =>
    props.checked
      ? css`
          border: 10px solid #6e6893;
          background-color: #8b83ba;
          svg path {
            fill: #f4f2ff;
          }
        `
      : css`
          border: 10px solid #6e6893;
          background-color: #fff;
          svg path {
            fill: #6e6893;
          }
        `}
`;
