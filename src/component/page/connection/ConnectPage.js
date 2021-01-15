import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './ConnectPage.css';
import Loading from "./Loading";

const getChatId = () => {
    let url = window.location.href;

    if (url.includes("?chat-id=")) {
        return url.substring(url.indexOf("=") + 1, url.length);
    } else
        return null;
};

const ConnectPage = ({connectionStatus, profile, history}) => {


    useEffect(() => {

        if (connectionStatus === null && !profile && !getChatId()) {
            console.log("ConnectionStatus is null and Profile does NOT exist");
            history.push("/error");
        } else if (connectionStatus === "CREATE_MEETING") {
            console.log("CREATE MEETING JAO");
        } else if (connectionStatus === "FIND_MEETING") {
            console.log("FIND MEETING JAO");
        } else
            console.log(getChatId());

    },[connectionStatus,profile]);

    return (
        <div className="container-connect">
            <Loading/>
            {/* <Success message="Connected!"/>*/}
            {/*<Error message="Failed!" /> */}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        connectionStatus: state.connectionStatus,
        profile: state.profile
    };
};

export default connect(mapStateToProps)(ConnectPage);
