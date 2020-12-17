import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../images/stringify-logo.png';
import {Button} from "../Button";
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    <img style={{width: "15%", minWidth: "150px"}} className="logo" src={logo} alt="logo"/>
                </Link>
                <div className="menu-icon" onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item field">
                        <input className="nav-field" placeholder="Enter key" type="text"/>
                        <Button className="btn-join">JOIN</Button>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/chat' className="nav-links">
                            New Meeting
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/information' className="nav-links">
                            Info
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
