import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .row {
    display: grid;
    width: 100%;
    grid-template-columns: 5px 20px 2fr 1fr 1fr 1fr 120px 100px 100px 30px;
    grid-template-rows: 1fr;
    gap: 16px;
    background-color: transparent;
    align-items: center;
    border-bottom: 1px solid #d9d5ec;
    span.item {
      color: #6e6893;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.7px;
    }

    span.hour {
    }
  }
`;
