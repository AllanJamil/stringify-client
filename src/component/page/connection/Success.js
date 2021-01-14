import React from 'react';
import {ImCheckmark} from 'react-icons/im';
import {IconContext} from "react-icons";

const Success = ({message}) => {
    return (
        <div className="status-wrapper">
            <IconContext.Provider value={{color: '#2a9100'}}>
                <div className="success-mark">
                    <ImCheckmark/>
                </div>
            </IconContext.Provider>
            <h2 className="connection-feed">{message}</h2>
        </div>
    );
};

export default Success;
