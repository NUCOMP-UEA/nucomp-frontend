import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #8B83BA;

  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    color: #fff;

    span.pages {
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.6px;
    }

    button.arrow {
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: #fff;

      svg {
        height: 10px;
        path {
          fill: #fff;
        }
      }
    }
  }
`;
