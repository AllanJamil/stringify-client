import React, {useEffect, useState} from 'react';
import {IconContext} from "react-icons";
import {FaTimes} from "react-icons/fa";
import {IoCopy, IoSend} from "react-icons/io5";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import {CopyToClipboard} from 'react-copy-to-clipboard';

import ContactList from "./ContactList";
import Toggle from "./Toggle";

const Settings = ({chatSession, theme, setClick, click}) => {

    const [copied, setCopied] = useState(false);

    useEffect(() => {

        setTimeout(() => setCopied(false), 2000);

    }, [copied]);

    return (
        <div className={`settings ${click ? "active" : null} ${theme}`}>

            <div className={`${!copied ? "copy-popup" : "copy-popup active"}`}>
                <p>COPIED!</p>
            </div>

            <ContactList device="mobile" theme={theme}/>

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
                    <td>{chatSession.key}</td>
                    <td>
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-top">
                                    Copy to clipboard
                                </Tooltip>
                            }
                        >
                            <CopyToClipboard text={chatSession.key} onCopy={() => setCopied(true)}>
                                <div className="icon">
                                    <IconContext.Provider value={{color: theme === 'dark' ? '#d2dad9' : '#676767'}}>
                                        <span><IoCopy size={25}/></span>
                                    </IconContext.Provider>
                                </div>
                            </CopyToClipboard>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>URL:</td>
                    <td>{chatSession.url}</td>
                    <td>
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-top">
                                    Copy to clipboard
                                </Tooltip>
                            }
                        >
                            <CopyToClipboard text={chatSession.url} onCopy={() => setCopied(true)}>
                                <div className="icon">
                                    <IconContext.Provider value={{color: theme === 'dark' ? '#d2dad9' : '#676767'}}>
                                        <span><IoCopy size={25}/></span>
                                    </IconContext.Provider>
                                </div>
                            </CopyToClipboard>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Invite by email:</td>
                    <td>
                        <input className="invite-field" type="email" placeholder="Email"/>
                    </td>
                    <td>
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id="tooltip-top">
                                    Send invitation
                                </Tooltip>
                            }
                        >
                            <div className="icon">
                                <IconContext.Provider value={{color: theme === 'dark' ? '#d2dad9' : '#676767'}}>
                                    <span><IoSend size={25}/></span>
                                </IconContext.Provider>
                            </div>
                        </OverlayTrigger>
                    </td>
                </tr>
                </tbody>
            </table>

            <Toggle/>

        </div>
    );
};

export default Settings;
