import { styled } from 'styled-components';

export const Container = styled.div`
  .title-wrapper,
  .subtitle-wrapper {
    width: 100%;
    border-bottom: 4px solid #6d5bd0;

    h1 {
      font-size: 38px;
      color: #6d5bd0;
      font-weight: 900;
      text-transform: uppercase;
    }

    h2 {
      font-size: 30px;
      color: #6d5bd0;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .title-wrapper {
    margin-bottom: 70px;
  }

  footer.footer {
    margin-bottom: 40px;
    p {
      color: #6e6893;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
    }
  }

  .check-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;

    input {
      border-radius: 5px;
      border: 3px solid #25213b;
      width: 20px;
      height: 20px;
    }

    span {
      color: #25213b;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      cursor: pointer;
      border-radius: 5px;
      background-color: #6d5bd0;
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
      border: none;
      padding: 16px 32px;

      &:disabled {
        cursor: default;
        background-color: #C6C2DE;
      }
    }
  }
`;
