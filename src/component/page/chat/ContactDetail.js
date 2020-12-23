import React from 'react';

const ContactDetail = ({contact, theme}) => {


    return (
        <div className={`contact-detail-wrapper ${theme}`}>
            <img src={require(`../../../images/avatars/${contact.avatar}.png`).default} alt="avatar"/>
            <div className="contact-name">{contact.name}</div>
        </div>
    );
};

export default ContactDetail;
