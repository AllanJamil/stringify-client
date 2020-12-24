import React, {useState} from 'react';

const ChatBox = ({profile, theme}) => {
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        console.log("Sending message");

        /*        let msgOutput = {
            from: profile.name,
            avatar: profile.avatar,
            date: messageTimeStamp(),
            content: message
        };*/

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
            <textarea
                value={message}
                onChange={event => setMessage(event.target.value)}
                className={`chatbox ${theme}`}
                onKeyDown={onEnter}
            />
        </div>
    );
};

export default ChatBox;
