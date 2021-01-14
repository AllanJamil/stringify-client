import React from 'react';
import './ConnectPage.css';
import spinner from '../../../images/loading-spinner.gif';

const ConnectPage = () => {

    return (
        <div className="container-connect">
            <img className="loading-spinner" src={spinner} alt="loading-spinner"/>
            <h2 className="connection-feed">Establishing connection...</h2>
        </div>
    );
};

export default ConnectPage;
