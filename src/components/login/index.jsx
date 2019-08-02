import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <Form></Form>
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
                    <legend>Log In</legend>
                    <p><label htmlFor="login">Name:</label>
                        <input type="text"
                               name="login"
                               id="login"
                               onChange={this.handleChange}
                               required/>
                    </p>
                    <p><label htmlFor="password">E-mail:</label>
                        <input type="password"
                               name="password"
                               id="password"
                               onChange={this.handleChange}
                               required/>

                    </p>
                </div>
                <button id="loginFormButton">Submit</button>
            </form>
        )
    }

}
