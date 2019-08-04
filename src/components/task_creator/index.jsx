import React from 'react';
import atomvpng from "../../../public/ATOMV.png";
import user from "../../../public/user.png";
import checked from "../../../public/checked.png";
import question from "../../../public/question.png";
import settings from "../../../public/settings.png";
import exit from "../../../public/exit.png";

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
    render() {
        return (
            <div className="add_task">
                <h2>Create new task</h2>
                <div className = "flex-button-wrapper">
                    <div className="button_wrapper">
                        <button>
                            Print 'Hello World'!
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

