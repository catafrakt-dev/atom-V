import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
               <MainBlock></MainBlock>
            </div>
        )
    }
}

class MainBlock extends React.Component{
    render(){
        return(
            <div className="mainContainer">
               <p>Home Page</p>
            </div>
        )
    }
}

