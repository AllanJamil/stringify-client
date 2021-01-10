import React, {useEffect} from 'react';
import {connect} from 'react-redux';


/*import ContactList from "./ContactList";*/
import ChatWindow from "./ChatWindow";
import './MeetingPage.css';
import './theme.css';
import {setChatActive} from "../../../actions";
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";


const MeetingPage = ({chatSession, messages, theme, setChatActive}) => {

    useEffect(() => {
        // when component mounts
        setChatActive('TRUE');

        //when component unmounts
        return () => setChatActive('FALSE');

    }, [setChatActive]);

    return (
        <div className="container-chat">
            <ChatWindow theme={theme} messages={messages}/>
            <ChatBox chatSession={{key: "DA26P8", url: "https://stringify-chat.netlify.app/meeting"}} theme={theme}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage);
