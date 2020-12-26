import React from 'react';
import './Toggle.css';

const Toggle = () => {
    return (
        <div>
            <div className="switch">
                <input type="checkbox"/>
                <span className="slider round" />
            </div>
        </div>
    );
};

export default Toggle;
