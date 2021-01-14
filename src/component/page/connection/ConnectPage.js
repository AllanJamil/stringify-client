import React from 'react';
import './ConnectPage.css';
import Success from "./Success";
import Loading from "./Loading";
import Error from "./Error"

const ConnectPage = () => {

    return (
        <div className="container-connect">
            {/*<Loading/>*/}
           {/* <Success message="Connected!"/>*/}
            <Error message="Failed!" />
        </div>
    );
};

export default ConnectPage;
