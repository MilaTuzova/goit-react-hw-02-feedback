import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const objs = Object.keys(options);
  console.log(objs);
  return (
    <div>
      {objs.map(key => (
        <button type="button" name={key} data-options={key} onClick={onLeaveFeedback}>
          {options[key]}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
