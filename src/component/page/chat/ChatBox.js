import React, {useState} from 'react';
import {IoSend} from 'react-icons/io5'
import {IconContext} from "react-icons";

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
            <div className="chat-area">
                <textarea
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    className={`chatbox ${theme}`}
                    onKeyDown={onEnter}
                />
                {
                    message === "" ? null :
                        (
                            <div className="send-btn" onClick={() => sendMessage()}>
                                <IconContext.Provider value={{color: theme === 'dark' ? '#f7f8fa' : '#676767'}}>
                                    <IoSend size={30}/>

                                </IconContext.Provider>
                            </div>
                        )
                }


            </div>
        </div>
    );
};

export default ChatBox;
