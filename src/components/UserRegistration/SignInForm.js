import { Component } from "react";
import './Form.css';


class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            userFirstName: '',
            userLastName: '',
            userEmail: '',
            userPassword: '',
            isSignUpSelected: true,
        }
    }

    firstNameChangeHandler = (event) => {
        this.setState((prevState) => {
            return {...prevState, userFirstName: event.target.value};
        })
    }

    lastNameChangeHandler = (event) => {
        this.setState((prevState) => {
            return {...prevState, userLastName: event.target.value};
        })
    }

    emailChangeHandler = (event) => {
        this.setState((prevState) => {
            return {...prevState, userEmail: event.target.value};
        })
    }
    
    passwordChangeHandler = (event) => {
        this.setState((prevState) => {
            return {...prevState, userPassword: event.target.value};
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSignIn(this.state);
    }

    loginSelectedHandler = (event) => {
        this.setState((prevState) => {
            return {...prevState, isSignUpSelected: false, userFirstName: '', userLastName: ''}
        })
    }

    signUpSelectedHandler = (event) => {
        this.setState((prevState) => {
            return {...prevState, isSignUpSelected: true}
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="switch">
                    <div 
                        className="left"
                        onClick={this.signUpSelectedHandler}
                        style={{
                            backgroundColor: this.state.isSignUpSelected ? '#510674': '#40005d'
                        }}
                        required
                    >Sign Up</div>
                    <div 
                        className="right" 
                        onClick={this.loginSelectedHandler}
                        style={{
                            backgroundColor: this.state.isSignUpSelected ? '#40005d': '#510674'
                        }}
                        required
                    >Login</div>
                </div>
                {this.state.isSignUpSelected ? (
                    <div className='user-registration__control'>
                    <input 
                        type='text'
                        onChange={this.firstNameChangeHandler}
                        placeholder="First Name"
                        required
                    />
                    <input 
                        type='test'
                        onChange={this.lastNameChangeHandler}
                        placeholder="Last Name"
                        required
                    />
                </div>
                ) : (<div></div>)}
                <div className='new-food-tem__controls'>
                    <div className='user-registration__control'>
                        <input 
                            type='email'
                            onChange={this.emailChangeHandler}
                            placeholder="Email"
                            required
                        />
                        <input 
                            type='password'
                            onChange={this.passwordChangeHandler}
                            placeholder="Password"
                            required
                        />
                    </div>
                </div>
                <div className='user-registration__actions'>
                    <button type='submit'>{this.state.isSignUpSelected ? "Sign Up" : "Login"}</button>
                </div>
            </form>
        )
    }
}

export default SignInForm;