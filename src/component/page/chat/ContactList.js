import React from 'react';
import ContactDetail from "./ContactDetail";
import {connect} from 'react-redux';

const ContactList = ({device, profilesConnected, theme}) => {

        const renderContacts = profilesConnected.map(contact => {
            return <ContactDetail key={contact.guid} theme={theme} contact={{name: contact.name, avatar: contact.avatar}}/>;
        });

    return (
        <div className={`contact-list ${device} ${theme}`}>
            <div className="contact-header">IN MEETING</div>
            {renderContacts}
{/*            <ContactDetail theme={theme} contact={{name: "pedram", avatar: "avatar20"}}/>
            <ContactDetail theme={theme} contact={{name: "Allan", avatar: "avatar16"}}/>
            <ContactDetail theme={theme} contact={{name: "Sara", avatar: "avatar1"}}/>
            <ContactDetail theme={theme} contact={{name: "Sara", avatar: "avatar1"}}/>
            <ContactDetail theme={theme} contact={{name: "Sara", avatar: "avatar1"}}/>*/}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        profilesConnected: state.profilesConnected
    };
};

export default connect(mapStateToProps)(ContactList);
