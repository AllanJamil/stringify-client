import {Stomp} from "@stomp/stompjs";
import SockJS from 'sockjs-client';

let stompClient;
let meetingID;

export const establishConnection = (wsSourceUrl, meetingId) => {
    meetingID = meetingId;
    stompClient = Stomp.over(() =>  {return new SockJS(wsSourceUrl)});
    stompClient.connect({}, () => {stompClient.subscribe(`/queue/connect/${meetingId}`, () => onProfileConnects);
        /*stompClient.subscribe(`/queue/meeting/${meetingId}`, frame => onMessageReceived(JSON.parse(frame).connect));*/
   /*     stompClient.subscribe(`/queue/disconnect/${meetingId}`, frame => onProfileDisconnects(JSON.parse(frame).connect));*/
    });
};

const onMessageReceived = message => {
    message = JSON.parse(message.body).content;
    console.log(message);
};

const onProfileConnects = profile => {
    const content = JSON.parse(profile).content;
    console.log("CONNECTED: " + content);
};

const onProfileDisconnects = profile => {
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
