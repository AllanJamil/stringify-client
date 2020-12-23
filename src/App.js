import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './component/page/home/LandingPage';
import ChatPage from './component/page/chat/ChatPage';
import ErrorPage from './component/page/error/ErrorPage';
import Navbar from "./component/Navbar";
import './App.css';
import InformationPage from "./component/page/information/InformationPage";
import ContactPage from "./component/page/contact/ContactPage";
import ProfilePage from "./component/page/profile/ProfilePage";
import Footer from "./component/Footer";
import {connect} from 'react-redux';


const App = ({isChatActive}) => {

    return (
        <div>
            <Router >
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/chat" component={ChatPage} />
                    <Route exact path="/information" component={InformationPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route path="/*" component={ErrorPage} />
                </Switch>
                {
                    !isChatActive.isActive ? <Footer/> : null
                }
            </Router>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isChatActive: state.isChatActive
    };
}

export default connect(mapStateToProps)(App);
