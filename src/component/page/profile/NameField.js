import React from 'react';
import './NameField.css';

const NameField = () => {
    return (
        <div>
            <form className="profile-form">
                <input
                    className="name-field"
                    minLength={3}
                    maxLength={30}
                    required type="text"
                    placeholder="Your Name"
                />
                <button className="submit-btn" type="submit">Connect</button>
            </form>
        </div>
    );
};

export default NameField;