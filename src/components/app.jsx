import React from 'react';
import {Switch, Route} from 'react-router-dom'



// pages
import Home from "./home/index.jsx";
import Contact from "./login/index.jsx";


// styles
import '../css/app.scss';

// app
export default class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Contact}/>
                </Switch>

            </div>
        )
    }
}