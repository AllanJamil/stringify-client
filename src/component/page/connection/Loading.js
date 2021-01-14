import React from 'react';
import spinner from "../../../images/loading-spinner.gif";

const Loading = () => {
    return (
        <div className="loading-wrapper">
            <img className="loading-spinner" src={spinner} alt="loading-spinner"/>
            <h2 className="connection-feed">Establishing connection...</h2>
        </div>
    );
};

export default Loading;