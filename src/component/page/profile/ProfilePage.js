import React from 'react';
import AvatarSlider from "./AvatarSlider";
import NameField from "./NameField";
import '../home/HeroSection.css';
import './ProfilePage.css'

const ProfilePage = () => {

    return (
        <div className="container-profile">
            <div style={{textAlign: "left"}} className="top-line">Almost there!</div>
            <h1>Create Your Profile</h1>
            <p>
                Please enter your name to connect to the chat session. You can also <span style={{color: "#f00946"}}>
                <b>pick an avatar</b></span> to your liking!
            </p>
            <AvatarSlider/>
            <NameField/>
        </div>
    );
};

export default ProfilePage;
