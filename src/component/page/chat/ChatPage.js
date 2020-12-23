import React, {useEffect} from 'react';
import {connect} from 'react-redux';


import ContactList from "./ContactList";
import ChatWindow from "./ChatWindow";
import './ChatPage.css';
import {setChatActive} from "../../../actions";


const ChatPage = ({messages, theme, setChatActive}) => {

    useEffect(() => {
        // when component mounts
        setChatActive('TRUE');

        //when component unmounts
        return () => setChatActive('FALSE');

    }, [setChatActive]);

    return (
        <div className="container-chat">
            <ChatWindow theme={theme} messages={messages}/>
            <ContactList/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        theme: state.theme
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setChatActive: e => dispatch(setChatActive(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
