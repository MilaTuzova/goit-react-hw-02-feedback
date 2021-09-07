import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const objs = Object.keys(options);

  return (
    <div>
      {objs.map((name, index) => (
        <button type="button" name={name} key={index} data-option={name} onClick={onLeaveFeedback} >
          {options[name]}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
