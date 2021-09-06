import React from 'react';

const Feedbackbtn = ({onGood, onNeutr, onBad}) => (
  <div>
    <button className="Btn" type="button" onClick={onGood}>
      good
    </button>
    <button className="Btn" type="button" onClick={onNeutr}>
      neutral
    </button>
    <button className="Btn" type="button" onClick={onBad}>
      bad
    </button>
  </div>
);

export default Feedbackbtn;
