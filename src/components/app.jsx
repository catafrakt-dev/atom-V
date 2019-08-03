import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from "./home/index.jsx";
import Contact from "./login/index.jsx";
import Registration from "./registration/index.jsx";
import Main from "./main/index.jsx";

import '../css/app.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Contact}/>
                    <Route path='/registration' component={Registration}/>
                    <Route path='/tasks' component={Main}/>
                </Switch>
            </div>
        )
    }
}
