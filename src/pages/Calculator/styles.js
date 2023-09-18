import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  overflow-y: auto;

  > .content {
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    padding: 90px;  
  }
`;
