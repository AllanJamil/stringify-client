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
/*import {Link} from "react-router-dom";*/

const App = () => {

    return (
        <div>
            <Router>
                <Navbar/>
                 {/*<Link to="/chat">Chat</Link>*/}
                <Switch>
                    <Route exact path="/" component={LandingPage}></Route>
                    <Route exact path="/chat" component={ChatPage}></Route>
                    <Route exact path="/information" component={InformationPage}></Route>
                    <Route exact path="/contact" component={ContactPage}></Route>
                    <Route exact path="/profile" component={ProfilePage}></Route>
                    <Route path="/*" component={ErrorPage}></Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;
