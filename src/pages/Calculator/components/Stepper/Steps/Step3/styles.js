import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 900px;
  display: flex;
  gap: 48px;

  .check-icon {
    width: 250px;
  }

  .texts {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    span.title {
      color: #6e6893;
      font-family: Inter;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    span.description {
      color: #6e6893;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const Button = styled(Link)`
  background-color: transparent;
  border: none;
  color: #6e6893;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  span {
    text-decoration-line: underline;
  }

  &::after {
    content: "→";
  }
`;
