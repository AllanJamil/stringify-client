import React from 'react';

import Message from "./Message";
import ChatBox from "./ChatBox";
import './scrollbar.css';

const ChatWindow = ({messages, theme}) => {

    /*    const renderMessages = messages.map(message => {
           return <Message message={message} theme={theme}/>
        });*/

    return (
        <div className={`chat-window ${theme}`}>
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar16", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <Message theme={theme}
                     message={{
                         from: "Sara",
                         avatar: "avatar1",
                         date: "2020-12-24 16:42",
                         content: "It could be that the access token might end up being used around the application" +
                             " over plain HTTP connections. So if an attacker sniffed it, they would only have short" +
                             " term access. This is what used to happen on the web as standard. Login was over HTTPS" +
                             " if you were lucky, and the rest of your session was over plain HTTP, transmitting the" +
                             " session ID in cleartext. " +
                             "The refresh token is only transmitted to the authorization server, so it is easier to" +
                             " enforce HTTPS only, meaning that an attacker could not eavesdrop on this connection." +
                             "It could be that the access token might end up being used around the application" +
                             " over plain HTTP connections. So if an attacker sniffed it, they would only have short" +
                             " term access. This is what used to happen on the web as standard. Login was over HTTPS" +
                             " if you were lucky, and the rest of your session was over plain HTTP, transmitting the" +
                             " session ID in cleartext. " +
                             "The refresh token is only transmitted to the authorization server, so it is easier to" +
                             " enforce HTTPS only, meaning that an attacker could not eavesdrop on this connection." +
                             "It could be that the access token might end up being used around the application" +
                             " over plain HTTP connections. So if an attacker sniffed it, they would only have short" +
                             " term access. This is what used to happen on the web as standard. Login was over HTTPS" +
                             " if you were lucky, and the rest of your session was over plain HTTP, transmitting the" +
                             " session ID in cleartext. " +
                             "The refresh token is only transmitted to the authorization server, so it is easier to" +
                             " enforce HTTPS only, meaning that an attacker could not eavesdrop on this connection."
                     }}
            />
        </div>
    );
};


export default ChatWindow;
