import React from 'react';
import ContactDetail from "./ContactDetail";

const ContactList = ({device, contacts, theme}) => {

/*    const renderContacts = contacts.map(contact => {
        return <ContactDetail contact={{name: contact.name, avatar: contact.avatar}}/>;
    });*/

    return (
        <div className={`contact-list ${device} ${theme}`}>
            <div className="contact-header">IN MEETING</div>
            <ContactDetail theme={theme} contact={{name: "pedram", avatar: "avatar20"}}/>
            <ContactDetail theme={theme} contact={{name: "Allan", avatar: "avatar16"}}/>
            <ContactDetail theme={theme} contact={{name: "Sara", avatar: "avatar1"}}/>
            <ContactDetail theme={theme} contact={{name: "Sara", avatar: "avatar1"}}/>
            <ContactDetail theme={theme} contact={{name: "Sara", avatar: "avatar1"}}/>
        </div>
    );
};

export default ContactList;
