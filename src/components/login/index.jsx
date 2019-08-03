import React from 'react'
import atomvpng from '../../../public/ATOMV.png';

export default class Home extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <AtomVImg></AtomVImg>
                <Form></Form>
            </div>
        )
    }
}

class AtomVImg extends React.Component{
    render() {
        return (
            <div className = "atomv-image">
                <img src={atomvpng} />;
            </div>
        )
    }
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login:'',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    navigateToHome() {
        console.log('here');
        //redirect to another component ('/home');
        // you need to read doc to know how to do it
    }

    handleSubmit(event){
        event.preventDefault();

        //your data from form keeps in state
        console.log(this.state);
        const form = {
            login: this.state.login,
            password: this.state.password,
        };

        //send your req, better use axios

        // axios.post('https://api.example.com/', form)
        //     .then(function (response) {
        //         console.log(response);
        // this.resetForm();

        // redirect to home after login
        // this.navigateToHome();


        //     })
        //     .catch(function (error) {
        //         console.log(error);
        // this.resetForm();
        //     });

        //after sending data you need to clear your state:





    };

    resetForm(){
        this.setState({
            name: '',
            email: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="formWrapper" >
                <div className="fieldsContainer">
                    <p>
                        <input type="text"
                               name="login"
                               id="login"
                               placeholder="Enter ypur username:"
                               onChange={this.handleChange}
                               required/>
                    </p>
                    <p>
                        <input type="password"
                               name="password"
                               id="password"
                               placeholder="Enter ypur password:"
                               onChange={this.handleChange}
                               required/>
                    </p>
                </div>
                <button id="loginFormButton">Login</button>
            </form>
        )
    }

}
