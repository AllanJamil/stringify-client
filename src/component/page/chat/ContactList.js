import React from 'react';
import ContactDetail from "./ContactDetail";
import './ChatPage.css';

const ContactList = ({contacts, theme}) => {

/*    const renderContacts = contacts.map(contact => {
        return <ContactDetail contact={{name: contact.name, avatar: contact.avatar}}/>;
    });*/

    return (
        <div className={`contact-list ${theme}`}>
            <div className="contact-header">IN MEETING - 0{/*{contacts.length}*/}</div>
            <ContactDetail contact={{name: "pedram", avatar: "avatar20"}}/>
        </div>
    );
};

export default ContactList;
