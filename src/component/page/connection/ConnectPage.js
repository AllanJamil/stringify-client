import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';

import './ConnectPage.css';
import Loading from "./Loading";
import {setConnectionStatus, setMeetingSession, setProfile} from "../../../actions";
import {createNewMeeting} from "../../../api/endpoints/endpoints";
import Success from "./Success";
import Error from "./Error";

const getChatId = () => {
    let url = window.location.href;

    if (url.includes("?chat-id=")) {
        return url.substring(url.indexOf("=") + 1, url.length);
    } else
        return null;
};

const ConnectPage = ({connectionStatus, setConnectionStatus, profile, keyMeeting, setMeeting, setProfile, history}) => {

    const [content, setContent] = useState(
        {
            display: 'loading',
            message: connectionStatus === "CREATE_MEETING" ? "Creating a meeting" : "Connecting to the meeting"
        });

    const dangerousOnMount = useRef(() => {
        if (connectionStatus === null && !profile && !getChatId()) {
            console.log("ConnectionStatus is null and Profile does NOT exist");
            history.push("/error");
        } else if (connectionStatus === "CREATE_MEETING") {

            createNewMeeting(profile)
                .then(response => {
                    setProfile(response.data.profile);
                    setMeeting(response.data.chatSession);
                    setContent({display: "success", message: "Initializing a new meeting"});
                })
                .catch(error => setContent({display: "failure", message: error.response.data.message}));

        } else if (connectionStatus === "FIND_MEETING") {
            console.log("FIND MEETING BY KEY JAO");
            console.log(keyMeeting)
        } else {
            console.log("FIND MEETING BY CHAT-ID JAO");
            console.log(getChatId());

            //set find meeting when
            return () => setConnectionStatus("FIND_MEETING");
        }
    });



    useEffect(() => {
        dangerousOnMount.current();
    }, []);

    const displayContent = () => {
        if (content.display === "failure")
            return <Error message={content.message}/>
        else if (content.display === "success")
            return <Success history={history} message={content.message}/>
        else
            return <Loading message={content.message}/>
    };

    return (
        <div className="container-connect">
            {displayContent()}
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
        setConnectionStatus: e => dispatch(setConnectionStatus(e)),
        setMeeting: e => dispatch(setMeetingSession(e)),
        setProfile: e => dispatch(setProfile(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectPage);
