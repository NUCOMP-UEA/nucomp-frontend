import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  width: 912px;
  height: 61px;
  color: #3C97AB;
  font-family: "Inter", sans-serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 60px;
  flex-shrink: 0;
  margin-bottom: 96px;
`;

export const EventsListContent = styled.div`
  display: flex;
  flex-direction: column;;
`;

export const EventContainer = styled.div`
  display: inline-flex;
  margin-bottom: 24px;
`;

export const ContentDate = styled.div`
  background: #85B0B9;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 20px 20px;
  }
  
  strong {
    color: #214A53;
    text-align: center;
    font-family: Inter;
    font-size: 85px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px; /* 70.588% */
    text-align: center;
  } 

  span {
    color: #214A53;
    font-family: Inter;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #0F7C94;
    padding: 20px;
  }
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 32px;

  span {
    color: #214A53;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 50px; /* 125% */
  }

  p {
      margin-left: 12px;
      color: #214A53;
      font-family: Inter;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 50px; /* 166.667% */
    }
  > div {
    display: flex;
    align-items: center;
  }
`;