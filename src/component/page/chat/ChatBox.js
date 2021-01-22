import React, {useEffect, useRef, useState} from 'react';
import {IoSend, IoSettings} from 'react-icons/io5'
import {IconContext} from "react-icons";
import Settings from "./Settings";
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import {connect} from 'react-redux';

import {addNewMessage, addProfileConnected, removeProfileDisconnected} from "../../../actions";

const wsSourceUrl = "http://localhost:8080/stringify-chat";
let stompClient = null;


const ChatBox = ({
                     meetingSession,
                     profile,
                     theme,
                     addNewToMessages,
                     addProfileConnected,
                     removeProfileDisconnected
                 }) => {
    const [message, setMessage] = useState("");
    const [click, setClick] = useState(false);


    const onProfileConnects = frame => {
        const connectionNotice = JSON.parse(frame.body);
        console.log(connectionNotice)

        const message = {
            avatar: connectionNotice.connectionMessage.avatar,
            from: connectionNotice.connectionMessage.from,
            date: connectionNotice.connectionMessage.date,
            content: connectionNotice.connectionMessage.content
        }

        addNewToMessages(message);
        addProfileConnected(connectionNotice.profile);
    };

    const onMessageReceived = frame => {
        const message = JSON.parse(frame.body);
        console.log(message)
        addNewToMessages(message);
    };


    const onProfileDisconnects = frame => {
        const connectionNotice = JSON.parse(frame.body);
        const message = {
            avatar: connectionNotice.connectionMessage.avatar,
            from: connectionNotice.connectionMessage.from,
            date: connectionNotice.connectionMessage.date,
            content: connectionNotice.connectionMessage.content
        }
        addNewToMessages(message);
        removeProfileDisconnected(connectionNotice.profile);
    };



    const sendConnectNotice = profile => {
        stompClient.send(`/app/connect/${meetingSession.guid}`, {}, JSON.stringify(profile));
    };



    const sendNewMessage = message => {
        stompClient.send(`/app/send/meeting/${meetingSession.guid}`, {}, JSON.stringify(message));
    };

    const dangerousOnMount = useRef(() => {
        stompClient = Stomp.over(() => {
            return new SockJS(wsSourceUrl)
        });
        stompClient.connect({}, () => {
            stompClient.subscribe(`/queue/connect/${meetingSession.guid}`, onProfileConnects);
            stompClient.subscribe(`/queue/meeting/${meetingSession.guid}`, onMessageReceived);
            stompClient.subscribe(`/queue/disconnect/${meetingSession.guid}`, onProfileDisconnects);
            sendConnectNotice(profile);
        });


    });

    useEffect(() => {
        dangerousOnMount.current();
    }, []);

    useEffect(() => {
        const sendDisconnectNotice = profile => {
            stompClient.send(`/app/disconnect/${meetingSession.guid}`, {}, JSON.stringify(profile));
        };

        window.onbeforeunload = () => {
            sendDisconnectNotice(profile);
        }
        return () => sendDisconnectNotice(profile);
    }, [profile, meetingSession.guid])

    const sendMessage = () => {
        let msgOutput = {
            from: profile.name,
            avatar: profile.avatar,
            content: message
        };

        if (message !== "") {
            sendNewMessage(msgOutput);
            console.log("Sending message");
        }

        setMessage("");
    }

    const onEnter = (event) => {

        if (event.keyCode === 13) {
            if (event.shiftKey) {
                console.log("new line")
            } else {
                event.preventDefault();
                sendMessage();
            }
        }
    };

    return (
        <div className={`container-chatbox ${theme}`}>

            <Settings profile={profile} meetingSession={meetingSession} click={click} theme={theme}
                      setClick={(event) => setClick(event)}/>

            <div className="chat-area">
                <textarea
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    className={`chatbox ${theme}`}
                    onKeyDown={onEnter}
                    placeholder="Send a message..."
                />
                <div className="btn-area">
                    <div onClick={() => setClick(!click)} className="btn-settings">
                        <IconContext.Provider value={{color: theme === 'dark' ? '#f7f8fa' : '#676767'}}>
                            <IoSettings size={30}/>
                        </IconContext.Provider>
                    </div>
                    {
                        message === "" ? null :
                            (
                                <div className="send-btn" onClick={() => sendMessage()}>
                                    <IconContext.Provider value={{color: '#f7f8fa'}}>
                                        <IoSend size={20}/>
                                    </IconContext.Provider>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addNewToMessages: e => dispatch(addNewMessage(e)),
        addProfileConnected: e => dispatch(addProfileConnected(e)),
        removeProfileDisconnected: e => dispatch(removeProfileDisconnected(e))
    };
};

export default connect(null, mapDispatchToProps)(ChatBox);
