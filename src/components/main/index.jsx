import React from 'react'
import atomvpng from '../../../public/ATOMV.png';
import plus from '../../../public/plus.png';

export default class Main extends React.Component {
    render() {
        return (
            <div className="blockContainer">
                <Aside></Aside>
                <Blocks></Blocks>
            </div>
        )
    }
}

class Aside extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><a href="#">Dima <img className="user" src="user.png" alt="userImg"/></a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
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
                        <div className='image'>
                            <img src={plus} alt="plus" />
                        </div>
                        <p className="add_task">Add new Task</p>
                    </a>
                </div>
            </div>
        )
    }
}
