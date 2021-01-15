import React, {useState} from 'react';
import AvatarSlider from "./AvatarSlider";
import '../home/HeroSection.css';
import './ProfilePage.css'
import './NameField.css';
import {connect} from 'react-redux';
import {setProfile} from "../../../actions";

const ProfilePage = ({setProfile}) => {

    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");

    const createProfile = e => {
        e.preventDefault();
        const tempProfile = {name, avatar};
        //TODO: fix action and reducer
        setProfile(tempProfile);
    };


    return (
        <div className="container-profile">
            <div style={{textAlign: "left"}} className="top-line">Almost there!</div>
            <h1>Create Your Profile</h1>
            <p>
                Please enter your name to connect to the chat session. You can also <span style={{color: "#f00946"}}>
                <b>pick an avatar</b></span> to your liking!
            </p>
            <AvatarSlider setAvatar={setAvatar}/>
            {/*<NameField/>*/}
            <form className="profile-form">
                <input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    className="name-field"
                    minLength={3}
                    maxLength={30}
                    required type="text"
                    placeholder="Your Name"
                />
                <button disabled={!name} className="submit-btn" type="submit" onClick={createProfile}>Connect</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {setProfile: e => dispatch(setProfile(e))}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
