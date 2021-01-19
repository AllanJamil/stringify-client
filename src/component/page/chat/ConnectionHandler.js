import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Stomp} from "@stomp/stompjs";
import SockJS from 'sockjs-client';
import {addNewMessage} from "../../../actions";

const wsSourceUrl = "http://localhost:8080/stringify-chat";
let stompClient = null;

const ConnectionHandler = ({meetingId, profile, addNewToMessages}) => {

    const sendDisconnectNotice = profile => {
        stompClient.send(`/app/disconnect/${meetingId}`, {}, JSON.stringify(profile));
    };

    const sendMessage = message => {
        stompClient.send(`/app/meeting/${meetingId}`, {}, JSON.stringify(message));
    };

    const sendConnectNotice = profile => {
        stompClient.send(`/app/connect/${meetingId}`, {}, JSON.stringify(profile));
    };

    const onProfileConnects = frame => {
        const connectionNotice = JSON.parse(frame.body);
        const message = {
            avatar: "notice",
            from: "Notice",
            date: connectionNotice.date,
            content: connectionNotice.connectionMessage
        }
        addNewToMessages(message);
    };

    const onMessageReceived = frame => {
        const message = JSON.parse(frame.body);
        addNewToMessages(message);
    };


    const onProfileDisconnects = frame => {
        const connectionNotice = JSON.parse(frame.body).content;
        const message = {
            avatar: "notice",
            from: "Notice",
            date: connectionNotice.date,
            content: connectionNotice.connectionMessage
        }
        addNewToMessages(message);
    };

    useEffect(() => {

        stompClient = Stomp.over(() => {
            return new SockJS(wsSourceUrl)
        });
        stompClient.connect({}, () => {
            stompClient.subscribe(`/queue/connect/${meetingId}`, onProfileConnects);
            stompClient.subscribe(`/queue/meeting/${meetingId}`, onMessageReceived);
            stompClient.subscribe(`/queue/disconnect/${meetingId}`, onProfileDisconnects);
            sendConnectNotice(profile);
        });

    }, []);

    return (
        <div>

        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addNewToMessages: e => dispatch(addNewMessage(e))
    }

};

export default connect(null, mapDispatchToProps)(ConnectionHandler);







