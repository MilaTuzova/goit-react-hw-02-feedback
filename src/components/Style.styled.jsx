import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 25px 25px 25px 50px;
`;

export const Button = styled.div`
  display: inline-block;
  color: black;
  font-weight: 700;
  text-decoration: none;
  padding: 5px 30px;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #fdbe33 #000 #d77206;
  border-radius: 6px;
  background: linear-gradient(#f3ae0f, #e38916) #e38916;
  transition: 0.2s;
  margin: 20px 5px 20px 5px;
  cursor: pointer;
`;

export const StatisticContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 500;
  letter-spacing: 0.06em;
  font-size: 18px;
  margin-top: 2px;
`;

export const StatisticItem = styled.span`
  margin-top: 10px;
`;
