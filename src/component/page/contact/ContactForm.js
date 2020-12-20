import React from 'react';
import './ContactPage.css';

const ContactForm = () => {
    return (
        <div className="contact-form">
            <form >
                <div className="upper">
                    <input required type="text" placeholder="Name"/>
                    <input required type="email" placeholder="Email"/>
                </div>
                <input required type="subject" placeholder="subject"/>
                <textarea minLength={10} placeholder="Your message here..." />
                <button className="submit-btn" type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
