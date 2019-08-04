import React from 'react';
import axios from 'axios';
import atomvpng from "../../../public/ATOMV.png";
import user from "../../../public/user.png";
import checked from "../../../public/checked.png";
import question from "../../../public/question.png";
import settings from "../../../public/settings.png";
import exit from "../../../public/exit.png";
import { exec } from 'child_process';

export default class RegisterTask extends React.Component {
    render() {
        return (
            <div className="blockContainer">
                <AtomVImg></AtomVImg>
                <Aside></Aside>
                <AddTask></AddTask>
            </div>
        )
    }
}

class AtomVImg extends React.Component{
    render() {
        return (
            <div className = "atomv-image-main">
                <img src={atomvpng} />;
            </div>
        )
    }
}

class Aside extends React.Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <ul>
                        <li><a href="#">Dima <img className="user" src={user} alt="userImg" /></a></li>
                        <li>
                            <a href="#">Tasks
                                <img className="icons" src={checked} alt="tasks" />
                            </a>
                        </li>
                        <li>
                            <a href="#">FAQ
                                <img className="question" src={question} alt="faq" />
                            </a>
                        </li>
                        <li>
                            <a href="#">Settings
                                <img className="settings" src={settings} alt="settings" />
                            </a>
                        </li>
                        <li>
                            <a href="#">Exit
                                <img className="exit" src={exit} alt="exit/" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className = "nav-helper"></div>
            </div>
        )
    }
}

class AddTask extends React.Component {
    func () {
        exec("curl 40.113.13.229:8998/sessions/1/statements -X POST -H 'Content-Type: application/json' -d '{\"code\":\"10 + 10\"}'", { encoding: 'utf-8' });
    }
    render() {
        return (
            <div className="add_task">
                <h2>Create new task</h2>
                <div className = "flex-button-wrapper">
                    <div className="button_wrapper">
                        <button onClick={this.func}>
                            Print '3 + 1'!
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="button_wrapper_two">
                        <button>
                            Train your network!
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

function sendRequest() {
    axios.post("http://40.113.13.229:8998/sessions/0/statements", '{"code": "2 + 2"}', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
            console.log(response);
        })
}


/*async function sh(cmd) {
    return new Promise(function (resolve, reject) {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

async function main() {
    let { stdout } = await sh("curl 40.113.13.229:8998/sessions/1/statements -X POST -H 'Content-Type: application/json' -d '{\"code\":\"2 + 2\"}'");
    for (let line of stdout.split('\n')) {
        console.log(`ls: ${line}`);
    }
}*/

/*
function local () {
    var exec = require('child_process').exec, child;
    child = exec('curl 40.113.13.229:8998/sessions/0/statements -X POST -H \'Content-Type: application/json\' -d \'{"code":"10 + 10"}\'');
}*/

