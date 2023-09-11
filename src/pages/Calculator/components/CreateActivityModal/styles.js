import { styled } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 100;

  > .content {
    max-width: 80%;
    max-height: 60vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  border-radius: 16px;
  border: 3px solid #8b83ba;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  header.header {
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
`;
