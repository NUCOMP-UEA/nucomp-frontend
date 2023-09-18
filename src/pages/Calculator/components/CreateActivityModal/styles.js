import { css, styled } from "styled-components";

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
    max-height: 75vh;
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

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px;

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

export const Input = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  label {
    color: #6d5bd0;
    text-align: right;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.1px;
    width: 200px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

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

      &.ch-done {
        width: 80px;
      }
    }

    span {
      color: #6d5bd0;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
    }
  }

  ${(props) =>
    props.chDone
      ? css`
          label {
            width: 100%;
          }
          .input-wrapper {
            width: fit-content;
          }
        `
      : ""}
`;

export const CertificateInput = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  label {
    color: #6d5bd0;
    text-align: right;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.1px;
    width: 200px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;

    .input-file {
      border-radius: 8px;
      border: 2px solid #6e6893;
      background: #fff;
      box-shadow: 0px 0px 4px 0px rgba(23, 25, 28, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;

      .file-name {
        width: 200px;
        padding: 8px;
        overflow: hidden;

        span {
          width: 150px;
          overflow: hidden;
          color: #6d5bd0;
          text-align: right;
          font-family: Inter;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          letter-spacing: 0.5px;
          padding: 16px;
        }
      }

      button {
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 8px 0px 0px 8px;
        border: none;
        background: #8b83ba;
        box-shadow: 0px 0px 4px 0px rgba(23, 25, 28, 0.05);
        padding: 8px;
        color: #fff;
        font-family: Inter;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: capitalize;
      }
    }

    span {
      color: #6d5bd0;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
    }
  }
`;

export const CategoriesInput = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  label {
    color: #6d5bd0;
    text-align: right;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.1px;
    width: 200px;
  }
  .course-input {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button.course-button {
      padding: 16px;
      padding-right: 24px;
      border-radius: 8px;
      border: 1px solid #6e6893;
      background: #fff;
      box-shadow: 0px 0px 4px 0px rgba(23, 25, 28, 0.05);
      position: relative;
      color: #000;
      font-family: Inter;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      position: relative;
      width: 100%;
      height: 46.4px;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      svg {
        position: absolute;
        right: 8px;
      }

      &.course-button-open {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom: none;
        svg {
          transform: rotateZ(180deg);
        }
      }
    }

    .course-option-wrapper {
      display: flex;
      width: 100%;
      flex-direction: column;
      position: absolute;
      top: 46px;
      max-height: 120px;
      overflow: auto;
      border-bottom: 1px solid #6e6893;
      border-radius: 0px 0px 8px 8px;

      button.course-option {
        cursor: pointer;
        width: 100%;
        padding: 8px;
        border: none;
        border-top: 1px solid #000;
        border-left: 1px solid #6e6893;
        border-right: 1px solid #6e6893;
        background: #fff;

        /* &:last-child {
          border-radius: 0px 0px 8px 8px;
          border: 1px solid #6e6893;
          border-top: 1px solid #000;
        } */
      }
    }

    span.description {
      color: #6d5bd0;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 14px */
    }
  }
`;
