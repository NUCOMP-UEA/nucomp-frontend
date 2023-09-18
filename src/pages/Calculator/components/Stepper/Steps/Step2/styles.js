import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Step2Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #6d5bd0;
  h1 {
    margin: 0px;
    color: #8b83ba;
    font-family: Inter;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.8px;
    text-transform: uppercase;
  }

  .hours {
    display: flex;
    align-items: center;
    gap: 48px;

    span {
      color: var(--fonts-primary-variant, #6e6893);
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    strong {
      color: var(--primary, #6d5bd0);
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  padding: 8px;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.2px;
  text-transform: capitalize;
  background-color: #8b83ba;
  border: none;
  border-radius: 0px 16px 0px 16px;
  color: #fff;
`;
