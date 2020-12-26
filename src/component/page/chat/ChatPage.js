import React, {useEffect} from 'react';
import {connect} from 'react-redux';


/*import ContactList from "./ContactList";*/
import ChatWindow from "./ChatWindow";
import './ChatPage.css';
import './theme.css';
import {setChatActive} from "../../../actions";
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";


const ChatPage = ({chatSession ,messages, theme, setChatActive}) => {
    console.log(theme)

    useEffect(() => {
        // when component mounts
        setChatActive('TRUE');

        //when component unmounts
        return () => setChatActive('FALSE');

    }, [setChatActive]);

    return (
        <div className="container-chat">
            <ChatWindow theme={theme} messages={messages}/>
            <ChatBox chatSession={{key: "DA26P8", url: "https://stringify-chat.netlify.app/chat"}} theme={theme}/>
                <ContactList device="desktop" theme={theme}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        theme: state.selectedTheme
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setChatActive: e => dispatch(setChatActive(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
