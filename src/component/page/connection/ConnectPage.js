import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './ConnectPage.css';
import Loading from "./Loading";
import {setConnectionStatus, setMeetingSession} from "../../../actions";

const getChatId = () => {
    let url = window.location.href;

    if (url.includes("?chat-id=")) {
        return url.substring(url.indexOf("=") + 1, url.length);
    } else
        return null;
};

const ConnectPage = ({connectionStatus, setConnectionStatus, profile, keyMeeting, history}) => {



    useEffect(() => {

        if (connectionStatus === null && !profile && !getChatId()) {
            console.log("ConnectionStatus is null and Profile does NOT exist");
            history.push("/error");
        } else if (connectionStatus === "CREATE_MEETING") {
            console.log("CREATE MEETING JAO");
        } else if (connectionStatus === "FIND_MEETING") {
            console.log("FIND MEETING BY KEY JAO");
            console.log(keyMeeting)
        } else {
            console.log("FIND MEETING BY CHAT-ID JAO");
            console.log(getChatId());

            //set find meeting when
            return () => setConnectionStatus("FIND_MEETING");
        }

    },[connectionStatus,profile, keyMeeting]);

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
        profile: state.profile,
        keyMeeting: state.keyMeeting
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setConnectionStatus: e => dispatch(setConnectionStatus(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectPage);
