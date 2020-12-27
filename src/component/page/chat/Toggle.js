import React from 'react';
import {FaSun, FaMoon} from 'react-icons/fa';
import {connect} from 'react-redux';
import {selectTheme} from "../../../actions";

import './Toggle.css';

const Toggle = ({theme, selectTheme}) => {

    const onThemeChange = () => {
        if (theme === "light")
            selectTheme("dark")
        else
            selectTheme("light")
    }

    return (
        <div>
            <input onChange={onThemeChange} id="checkbox" className="checkbox" type="checkbox"/>
            <label className="switch-label" htmlFor="checkbox">
                <FaMoon className="fas fa-moon" />
                <FaSun className="fas fa-sun" />
                <div className="circle" />
            </label>
        </div>
    );
};

const mapStateToProps = state => {
  return {theme: state.selectedTheme};
};

const mapDispatchToProps = dispatch => {
    return {selectTheme: e => dispatch(selectTheme(e))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
