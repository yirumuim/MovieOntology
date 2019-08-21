import React from 'react';
import './ExtraContentsWrapper.css'

const ExtraContentsWrapper = ({children}) => {
    return (
        <div className="ExtraContentsWrapper">
            {children}
        </div>
    );
};

export default ExtraContentsWrapper;