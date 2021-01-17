import React, {useEffect} from 'react';
import {ImCheckmark} from 'react-icons/im';
import {IconContext} from "react-icons";

const Success = ({message, history}) => {

    useEffect(() => {
       setTimeout(() => history.push("/meeting"), 2000);
    }, [history]);

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
