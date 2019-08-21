import React from 'react';

import './ContentWrapper.css';

const ContentWrapper = ({ children }) => (
  <div className="ContentWrapper">
    {children}
  </div>
);

export default ContentWrapper;
