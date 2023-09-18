import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => (props.ischecked === 'checked' ? '#8b83ba' : 'transparent')};
  border: 2px solid #8b83ba;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    path {
      fill: white;
    }
  }
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  `;

export const ContainerHeader = styled.div`
  border-radius: 4px;
  background-color: ${(props) => (props.ischecked === 'checked' ? 'white' : 'transparent')};
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 40px;
    path {
      fill: #8b83ba;
    }
  }
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
