import React from 'react';
import Message from "./Message";
import ChatBox from "./ChatBox";

const ChatWindow = ({messages, theme}) => {

    /*    const renderMessages = messages.map(message => {
           return <Message message={message} theme={theme}/>
        });*/

    return (
        <div className={`chat-window ${theme}`}>
            <Message theme={theme}
                     message={{from: "Allan", avatar: "avatar5", date: "2020-12-24 16:34", content: "Hej Pedram!"}}
            />
            <ChatBox/>
        </div>
    );
};


export default ChatWindow;
