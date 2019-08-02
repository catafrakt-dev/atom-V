import React from 'react'

export default class Registration extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <FormContainer></FormContainer>
            </div>
        )
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            nickname: '',
            password: '',
            country: '',
            city: ''
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
            name: this.state.name,
            surname: this.state, surname,
            email: this.state.email,
            nickname: this.state.login,
            password: this.state.password,
            country: this.state.country,
            city: this.state.city,
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
                name: '',
                email: '',
                surname: '',
                country: '',
                city: '',
                nickname: '',
                password: ''
            })
        }

        render()
        {
            return (
                <form onSubmit={this.handleSubmit} className="formWrapper">
                    <div className="fieldsContainer">
                        <legend>Registration</legend>
                        <p><label htmlFor="name">Name:</label>
                            <input type="text"
                                   name="name"
                                   id="name"
                                   onChange={this.handleChange}
                                   required/>
                        </p>
                        <p><label htmlFor="surname">Surname:</label>
                            <input type="text"
                                   name="surname"
                                   id="surname"
                                   onChange={this.handleChange}
                                   required/>
                        </p>
                        <p><label htmlFor="email">E-mail:</label>
                            <input type="email"
                                   name="email"
                                   id="email"
                                   onChange={this.handleChange}
                                   required/>
                        </p>
                        <p><label htmlFor="password">Nickname:</label>
                            <input type="text"
                                   name="Nickname"
                                   id="Nickname"
                                   onChange={this.handleChange}
                                   required/>
                        </p>
                        <p><label htmlFor="password">Password:</label>
                            <input type="password"
                                   name="password"
                                   id="password"
                                   onChange={this.handleChange}
                                   required/>
                        </p>
                        <p><label htmlFor="country">Country:</label>
                            <input type="text"
                                   name="country"
                                   id="country"
                                   onChange={this.handleChange}
                                   required/>
                        </p>
                        <p><label htmlFor="city">City:</label>
                            <input type="text"
                                   name="city"
                                   id="city"
                                   onChange={this.handleChange}
                                   required/>
                        </p>
                    </div>
                    <button id="registrationFormButton">Done</button>
                </form>
            )
        }
}
