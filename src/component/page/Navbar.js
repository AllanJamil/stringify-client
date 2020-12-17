import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../../images/stringify-logo.png';
import {Button} from "../Button";
import './Navbar.css';
import {IconContext} from "react-icons";

const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img  className="logo" src={logo} alt="logo"/>
                </Link>
                <IconContext.Provider value={{color: '#fff'}}>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                </IconContext.Provider>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item field">
                        <input maxLength={6} className="nav-field" placeholder="Enter key" type="text"/>
                        <Button className="btn-join">Join Meeting</Button>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/chat' className="nav-links" onClick={closeMobileMenu}>
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

export default Navbar;
