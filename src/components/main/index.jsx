import React from 'react'
import atomvpng from '../../../public/ATOMV.png';
import plus from '../../../public/plus.png';
import checked from '../../../public/checked.png';
import settings from '../../../public/settings.png';
import question from '../../../public/question.png';
import exit from '../../../public/exit.png';
import user from '../../../public/user.png';

export default class Main extends React.Component {
    render() {
        return (
            <div className="blockContainer">
                <AtomVImg></AtomVImg>
                <Aside></Aside>
                <Blocks></Blocks>
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
        )
    }
}

class Blocks extends React.Component {
    render() {
        return (
            <div className="blocks">
                <div className='Bars'>
                    <div className='left'>
                        <div className="bar"></div>
                        <p className='Persent'>0</p>
                        <p className='Memory'>Memory</p>
                    </div>
                    <div className="center">
                        <p className='Num'>0</p>
                        <p className='Tasks'>Tasks</p>
                    </div>
                    <div className="right">
                        <div className="bar"></div>
                        <p className='Persent'>0</p>
                        <p className='CPU'>CPU</p>
                    </div>
                </div>
                <div className="add">
                    <a href="#">
                        <div>
                            <img className="image" src={plus} alt="plus" />
                        </div>
                        <p className="add_task">Add new Tasks</p>
                    </a>
                </div>
            </div>
        )
    }
}
