import { Component } from "react";
import './Form.css';


class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            userEmail: '',
            userPassword: ''
        }
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

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className='new-food-tem__controls'>
                    <div className='user-registration__control'>
                        <input 
                            type='email'
                            onChange={this.emailChangeHandler}
                            placeholder="Email"
                            // required
                        />
                    </div>
                    <div className='user-registration__control'>
                        <input 
                            type='password'
                            onChange={this.passwordChangeHandler}
                            placeholder="Password"
                            // required
                        />
                    </div>
                </div>
                <div className='user-registration__actions'>
                    <button type='submit'>Login</button>
                </div>
            </form>
        )
    }
}

export default SignInForm;