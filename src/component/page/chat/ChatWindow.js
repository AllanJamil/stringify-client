import React, {useEffect, useRef} from 'react';

import Message from "./Message";
import './scrollbar.css';
import {connect} from 'react-redux';

const ChatWindow = ({messages, theme}) => {

    const bottom = useRef();

    const scrollToBottom = () => {
        bottom.current.scrollIntoView({block: "end", inline: "end"});
    };

    //TODO: fix scroll to bottom
    useEffect(() => {
        scrollToBottom();

    }, [messages])


        const renderMessages = messages.map(message => {
           return <Message key={message.guid} message={message} theme={theme}/>
        });

    return (
        <div className={`chat-window ${theme}`}>
            {renderMessages}
            <div ref={bottom}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(ChatWindow);
