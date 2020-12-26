import React, {useState} from 'react';
import {IoCopy, IoSend, IoSettings} from 'react-icons/io5'
import {FaTimes} from 'react-icons/fa'
import {IconContext} from "react-icons";
import ContactList from "./ContactList";

const ChatBox = ({profile, theme}) => {
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

            <div className={`settings ${click ? "active" : null}`}>

                <div onClick={() => setClick(!click)} className="close-btn">
                    <IconContext.Provider value={{color: theme === 'dark' ? '#d2dad9' : '#676767'}}>
                        <FaTimes size={30}/>
                    </IconContext.Provider>
                </div>

{/*                <ContactList theme={theme} />*/}

                <table>
                    <tbody>
                    <tr>
                        <td>KEY:</td>
                        <td>DF4A9C</td>
                        <td>
                            <IconContext.Provider value={{color: theme === 'dark' ? '#d2dad9' : '#676767'}}>
                                <span><IoCopy size={20}/></span>
                            </IconContext.Provider>
                        </td>
                    </tr>
                    <tr>
                        <td>URL</td>
                        <td>https://stringify-chat.netlify.app/chat</td>
                        <td>
                            <IconContext.Provider value={{color: theme === 'dark' ? '#d2dad9' : '#676767'}}>
                                <span><IoCopy size={20}/></span>
                            </IconContext.Provider>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <button>TOGGLE BUTTON</button>

            </div>
            <div className="chat-area">
                <textarea
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    className={`chatbox ${theme}`}
                    onKeyDown={onEnter}
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
                                    <IconContext.Provider value={{color: theme === 'dark' ? '#f7f8fa' : '#676767'}}>
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
