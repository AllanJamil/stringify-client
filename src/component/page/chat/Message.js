import React from 'react';

const Message = ({message, theme}) => {
    return (
        <div>
            <div className={`message-wrapper ${theme}`}>
                <img src={require(`../../../images/avatars/${message.avatar}.png`).default} alt="avatar"/>
                <div className="message-detail">
                    <div className="identity">
                        {message.from} <span className="message-date">{message.date}</span>
                    </div>
                    <div className="message-content">{message.content}</div>
                </div>
            </div>
            <div className="message-divider" />
        </div>

    );
};

export default Message;
