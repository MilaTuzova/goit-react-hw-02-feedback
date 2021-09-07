import React from 'react';
import {StatisticContainer, StatisticItem} from 'components/Style.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage, title }) => (
  <div>
    <h2> {title} </h2>
    <StatisticContainer>
      <StatisticItem> Good: {good} </StatisticItem>
      <StatisticItem> Neutral: {neutral} </StatisticItem>
      <StatisticItem> Bad: {bad} </StatisticItem>
      <StatisticItem> Total: {total} </StatisticItem>
      <StatisticItem> Positive feedback: {positivePercentage} </StatisticItem>
    </StatisticContainer>
  </div>
);

export default Statistics;
