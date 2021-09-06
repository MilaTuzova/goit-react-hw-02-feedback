import React from 'react';

const TitleSection = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

export default TitleSection;
