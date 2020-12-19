import React from 'react';
import AvatarSlider from "./AvatarSlider";
import NameField from "./NameField";
import '../home/HeroSection.css';



const getStyle = {
    textAlign: "center",
    width: "70%",
    margin: "10rem auto"
}

const ProfilePage = () => {
    return (
        <div style={getStyle}>
            <div style={{textAlign: "left"}} className="top-line">Almost there!</div>
            <h1 style={{marginBottom: "10px", textAlign: "left"}}>Create Your Profile</h1>
            <p
                style={{
                    marginBottom: "35px",
                    maxWidth: "440px",
                    fontSize: "18px",
                    textAlign: "left"
                }}
            >
                Enter your name to connect. You can also pick a avatar to your liking!
            </p>
            <AvatarSlider/>
            <NameField/>
        </div>
    );
};

export default ProfilePage;