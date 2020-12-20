import React from 'react';
import './ContactPage.css';
import SideBanner from "./SideBanner";
import ContactForm from "./ContactForm";

const ContactPage = () => {
    return (
        <div className="container-contact">
            <div className="card-contact">
                <SideBanner />
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
