import React from 'react'
import atomvpng from '../../../public/ATOMV.png';

export default class Registration extends React.Component {
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

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            phone: '',
            password: '',
            country: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    navigateToHome() {
        console.log('navigate');
        //redirect to another component ('/home');
        // you need to read doc to know how to do it
    }

    handleSubmit(event) {
        event.preventDefault();

        //your data from form keeps in state
        console.log(this.state);
        const form = {
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            country: this.state.country,
        };

        //send your req, better use axios

        // axios.post('https://api.example.com/', form)
        //     .then(function (response) {
        //         console.log(response);
        // this.resetForm();
        // this.navigateToHome();


        //     })
        //     .catch(function (error) {
        //         console.log(error);
        // this.resetForm();
        //     });

        //after sending data you need to clear your state:
        // }
    };

        resetForm()
        {
            this.setState({
                username: '',
                email: '',
                phone: '',
                password: '',
                country: '',
            })
        }

        render()
        {
            return (
                <form onSubmit={this.handleSubmit} className="formWrapper">
                    <div className="fieldsContainer">
                            <input type="text"
                                   name="username"
                                   id="username"
                                   placeholder="Enter your username:"
                                   onChange={this.handleChange}
                                   required/>
                            <input type="email"
                                   name="email"
                                   id="email"
                                   placeholder="Enter your email:"
                                   onChange={this.handleChange}
                                   required/>
                            <input type="password"
                                   name="password"
                                   id="password"
                                   placeholder="Enter your password:"
                                   onChange={this.handleChange}
                                   required/>
                            <input type="text"
                                   name="country"
                                   id="country"
                                   placeholder="Enter your country:"
                                   onChange={this.handleChange}
                                   required/>
                            <input type="text"
                                   name="phone"
                                   id="phone"
                                   placeholder="Enter your phone:"
                                   onChange={this.handleChange}
                                   required/>
                        <label id="agree" htmlFor="horns">I agree with all rules</label>
                        <input type="checkbox" name="option2" value="a2"/>
                        <button id="registrationFormButton">Register</button>
                    </div>
                </form>
            )
        }
}
