import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './component/page/LandingPage';
import ChatPage from './component/page/ChatPage';
import ErrorPage from './component/page/ErrorPage';
import Navbar from "./component/page/Navbar";
import './App.css';
import InformationPage from "./component/page/InformationPage";
import ContactPage from "./component/page/ContactPage";


const App = () => {

    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LandingPage}></Route>
                    <Route exact path="/chat" component={ChatPage}></Route>
                    <Route exact path="/information" component={InformationPage}></Route>
                    <Route exact path="/contact" component={ContactPage}></Route>
                    <Route path="/*" component={ErrorPage}></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
