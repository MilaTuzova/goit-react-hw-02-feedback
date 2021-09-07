import React from 'react';
import {StaticticContainer} from 'components/Style.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage, title }) => (
  <div>
    <h2> {title} </h2>
    <StaticticContainer>
      <span> Good: {good} </span>
      <span> Neutral: {neutral} </span>
      <span> Bad: {bad} </span>
      <span> Total: {total} </span>
      <span> Positive feedback: {positivePercentage} </span>
    </StaticticContainer>
  </div>
);

export default Statistics;
