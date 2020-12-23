import React from 'react';

const ContactDetail = ({contact, theme}) => {


    return (
        <div className="contact-detail-wrapper">
            <img src={require(`../../../images/avatars/${contact.avatar}.png`).default} alt="avatar"/>
            <div className={`contact-name ${theme}`}>{contact.name}</div>
        </div>
    );
};

export default ContactDetail;
