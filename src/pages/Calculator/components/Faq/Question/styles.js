import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 16px;
  cursor: pointer;
  border-bottom: 3px solid #6D5BD0;
  padding-bottom: 16px;

  .question-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    user-select: none;

    span {
      color: #25213b;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
    }

    svg {
      transform: rotate(${(s) => (s.selected ? '60deg' : '0deg')});
      transform-origin: 50% 50%;
      transition: 0.5s;
      width: 20px;
    }
  }

  .answer-wrapper {
    width: 100%;

    p {
      color: #8b83ba;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      text-align: justify;
    }
  }
`;
