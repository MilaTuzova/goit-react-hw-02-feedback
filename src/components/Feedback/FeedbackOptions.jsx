import React from 'react';

import {Button} from '../Style.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const objs = Object.keys(options);

  return (
    <div>
      {objs.map((name, index) => (
        <Button type="button" name={name} key={index} data-option={name} onClick={onLeaveFeedback} >
          {options[name]}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
