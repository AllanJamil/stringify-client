import React from 'react';
import './ContactPage.css';
import email from '../../../images/letter-icon.png';

const SideBanner = () => {
    return (
        <div className="side-container">
            <div className="content-side">
                <h1>Contact us</h1>
                <br/>
                <p>
                    If you have any questions or want to get in touch us,
                    then please use the form.
                </p>
                <br/>
                <p>We look forward to hearing from you!</p>
                <img src={email} alt="email"/>
            </div>
        </div>
    );
};

export default SideBanner;
