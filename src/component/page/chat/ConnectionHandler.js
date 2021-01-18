import {Stomp} from "@stomp/stompjs";
import SockJS from 'sockjs-client';

let stompClient;
let meetingID;

export const establishConnection = (wsSourceUrl, meetingId) => {
    console.log(wsSourceUrl)
    meetingID = meetingId;
    const socket = new SockJS(wsSourceUrl);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, frame => {
        console.log(frame);
        stompClient.subscribe(`queue/meeting/${meetingId}`, onMessageReceived);
        stompClient.subscribe(`queue/connect/${meetingId}`, onProfileConnects);
        stompClient.subscribe(`queue/disconnect/${meetingId}`, onProfileDisconnects);
    });
};

export const onMessageReceived = message => {
    message = JSON.parse(message.body).content;
    console.log(message);
};

export const onProfileConnects = profile => {
    profile = JSON.parse(profile.body).content;
    console.log("CONNECTED: " + profile);
};

export const onProfileDisconnects = profile => {
    profile = JSON.parse(profile.body).content;
    console.log("DISCONECTED: " + profile);
};

export const sendConnectNotice = profile => {
    stompClient.send(`/app/connect/${meetingID}`, {}, JSON.stringify(profile));
};

export const sendDisconnectNotice = profile => {
    stompClient.send(`/app/disconnect/${meetingID}`, {}, JSON.stringify(profile));
};

export const sendMessage = message => {
    stompClient.send(`/app/meeting/${meetingID}`, {}, JSON.stringify(message));
};
