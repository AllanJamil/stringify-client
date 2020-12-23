import React from 'react';
import ContactDetail from "./ContactDetail";

const ContactList = ({contacts, theme}) => {

/*    const renderContacts = contacts.map(contact => {
        return <ContactDetail contact={{name: contact.name, avatar: contact.avatar}}/>;
    });*/

    return (
        <div className={`contact-list ${theme}`}>
            <ContactDetail contact={{name: "pedram", avatar: "avatar20"}}/>
        </div>
    );
};

export default ContactList;
