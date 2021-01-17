import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import ChatWindow from "./ChatWindow";
import './MeetingPage.css';
import './theme.css';
import {setChatActive, setConnectionStatus, setKeyMeeting, setMeetingSession, setProfile} from "../../../actions";
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";


const MeetingPage = (
    {
        setConnectionStatus,
        meetingSession,
        setMeeting,
        profile,
        setProfile,
        setKey,
        messages,
        theme,
        setChatActive,
        history
    }) => {

    useEffect(() => {
        // when component mounts
        if (!profile || !meetingSession) {
            history.push('/error');
        }

        setChatActive('TRUE');

        //when component unmounts
        return () => {
            setChatActive('FALSE');
            setConnectionStatus(null);
            setKey("");
            setMeeting(null);
            setProfile(null);
        }

    }, [setChatActive, history, setMeeting, setKey, setProfile, meetingSession, profile, setConnectionStatus]);

    return (
        <div className="container-chat">
            <ChatWindow theme={theme} messages={messages}/>
            <ChatBox chatSession={{key: "DA26P8", url: "https://stringify-chat.netlify.app/meeting"}} theme={theme}/>
            <ContactList device="desktop" theme={theme}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        theme: state.selectedTheme,
        profile: state.profile,
        meetingSession: state.meetingSession
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setChatActive: e => dispatch(setChatActive(e)),
        setProfile: e => dispatch(setProfile(e)),
        setConnectionStatus: e => dispatch(setConnectionStatus(e)),
        setMeeting: e => dispatch(setMeetingSession(e)), // unresolved if named setMeetingSession?
        setKey: e => dispatch(setKeyMeeting(e)) // unresolved if named setKeyMeeting?
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage);
