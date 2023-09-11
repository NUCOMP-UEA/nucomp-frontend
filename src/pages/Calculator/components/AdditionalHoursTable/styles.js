import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid #6D5BD0;
  overflow: hidden;
  border-radius: 8px;
`;

export const AdditionalHeader = styled.header`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button.plus-activity {
    padding: 8px 16px;
    display: flex;
    color: white;
    background-color: #8b83ba;
    border: none;
    border-radius: 24px;
    cursor: pointer;
  }
`;

export const TableHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 5px 20px 120px 120px 120px 120px 120px 1fr 1fr 30px;
  grid-template-rows: 1fr;
  gap: 16px;
  background-color: #8b83ba;
  align-items: center;
  border: 1px solid #d9d5ec;
  border-left: none;
  border-right: none;

  .selected {
    background-color: ${(props) => (props.selected ? '#FFFFFF' : '#8B83BA')};
    height: 45px;
  }

  .head {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    user-select: none;
  }

  .trash {
    cursor: pointer;
  }
`;
