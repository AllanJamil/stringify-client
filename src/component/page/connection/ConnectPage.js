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

const ConnectPage = props => {

    const [content, setContent] = useState(
        {
            display: 'loading',
            message: props.connectionStatus === "CREATE_MEETING" ? "Creating a meeting" : "Connecting to the meeting"
        });

    const dangerousOnMount = useRef(() => {
        if (props.connectionStatus === null && !props.profile && !getChatId()) {
            console.log("ConnectionStatus is null and Profile does NOT exist");
            props.history.push("/error");
        } else if (props.connectionStatus === "CREATE_MEETING") {

            createNewMeeting(props.profile)
                .then(response => {
                    props.setProfile(response.data.profile);
                    props.setMeeting(response.data.chatSession);
                    setContent({display: "success", message: "Initializing a new meeting"});
                })
                .catch(error => setContent({display: "failure", message: error.response.data.message}));

        } else if (props.connectionStatus === "FIND_MEETING") {
            console.log("FIND MEETING BY KEY JAO");
            console.log(props.keyMeeting)
        } else {
            console.log("FIND MEETING BY CHAT-ID JAO");
            console.log(getChatId());

            //set find meeting when
            return () => props.setConnectionStatus("FIND_MEETING");
        }
    });



    useEffect(() => {
        dangerousOnMount.current();
    }, []);

    const displayContent = () => {
        if (content.display === "failure")
            return <Error message={content.message}/>
        else if (content.display === "success")
            return <Success history={props.history} message={content.message}/>
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
