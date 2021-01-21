import React, {useEffect, useState} from 'react';
import {IconContext} from "react-icons";
import {FaTimes} from "react-icons/fa";
import {IoSend} from "react-icons/io5";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

import ContactList from "./ContactList";
import Toggle from "./Toggle";
import CopyButton from "./CopyButton";

const Settings = ({meetingSession, theme, setClick, click}) => {

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

            <table>
                <tbody>
                <tr>
                    <td>KEY:</td>
                    <td className="key-style">{meetingSession.key}</td>
                    <td>
                        <CopyButton theme={theme} setCopied={e => setCopied(e)} toCopy={meetingSession.key}/>
                    </td>
                </tr>
                <tr>
                    <td>URL:</td>
                    <td>{meetingSession.connectUrl}</td>
                    <td>
                        <CopyButton theme={theme} setCopied={e => setCopied(e)} toCopy={meetingSession.connectUrl}/>
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
