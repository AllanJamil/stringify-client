import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import {connect} from 'react-redux';
import {IconContext} from "react-icons";

import './Navbar.css';
import logo from '../images/stringify-logo.png';
import {Button} from "./Button";
import {setConnectionStatus, setKey} from "../actions";

const Navbar = ({setConnectionStatus, setKey, history}) => {
    const [click, setClick] = useState(false);
    const [keyValue, setKeyValue] = useState("");

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onJoinMeeting = () => {
        setKey(keyValue);
        setConnectionStatus("FIND_MEETING");
        closeMobileMenu();
        history.push('/connect');
        setKeyValue("");
    }

    return (
        <div className={`navbar ${!click ? null : 'static'}`}>
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
                <IconContext.Provider value={{color: '#fff'}}>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                </IconContext.Provider>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item field">
                        <input
                            value={keyValue}
                            maxLength={6}
                            className="nav-field"
                            placeholder="Enter key"
                            type="text"
                            onChange={event => setKeyValue(event.target.value)}
                        />
                        {/*TODO: make button listen on ENTER*/ }
                        <Button disabled={keyValue.length !== 6} onClick={onJoinMeeting} className="btn-join">Join Meeting</Button>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile' className="nav-links" onClick={closeMobileMenu}>
                            New&nbsp;Meeting
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/information' className="nav-links" onClick={closeMobileMenu}>
                            Information
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
  return {
      setKey: e => dispatch(setKey(e)),
      setConnectionStatus: e => dispatch(setConnectionStatus(e))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Navbar));
