import React, {useState} from 'react';
import {IoSend, IoSettings} from 'react-icons/io5'
import {IconContext} from "react-icons";
import Settings from "./Settings";

const ChatBox = ({chatSession ,profile, theme}) => {
    const [message, setMessage] = useState("");
    const [click, setClick] = useState(false);

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

            <Settings chatSession={chatSession} click={click} theme={theme} setClick={(event) => setClick(event)}/>

            <div className="chat-area">
                <textarea
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    className={`chatbox ${theme}`}
                    onKeyDown={onEnter}
                    placeholder="Send a message..."
                />
                <div className="btn-area">
                    <div onClick={() => setClick(!click)} className="btn-settings">
                        <IconContext.Provider value={{color: theme === 'dark' ? '#f7f8fa' : '#676767'}}>
                            <IoSettings size={30}/>
                        </IconContext.Provider>
                    </div>
                    {
                        message === "" ? null :
                            (
                                <div className="send-btn" onClick={() => sendMessage()}>
                                    <IconContext.Provider value={{color: '#f7f8fa'}}>
                                        <IoSend size={20}/>
                                    </IconContext.Provider>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
);
};

export default ChatBox;
