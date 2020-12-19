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
            <h1 style={{marginBottom: "50px", textAlign: "left"}}>Create Your Profile</h1>
            <AvatarSlider/>
            <NameField/>
        </div>
    );
};

export default ProfilePage;