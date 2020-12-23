import React from 'react';

const Message = ({message, theme}) => {
    return (
        <div className="message-wrapper">
            <img src={require(`../../../images/avatars/${message.avatar}.png`).default} alt="avatar"/>
            <div className={`message-wrapper ${theme}`}>
                <div className="identity">
                    {message.from} <span className="message-date">{message.date}</span>
                </div>
                <div className="message-content">{message.content}</div>
            </div>
        </div>
    );
};

export default Message;
