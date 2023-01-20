import { useState } from "react";
import './Form.css';

const LoginForm = (props) => {
    const [userDetails, setUserDetails] = useState({
        userEmail: '',
        userPassword: ''
    });

    const emailChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {...prevState, userEmail: event.target.value};
        })
    };
    const passwordChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {...prevState, userPassword: event.target.value};
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSignIn(1);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-food-tem__controls'>
                <div className='user-registration__control'>
                    <input 
                        type='email'
                        onChange={emailChangeHandler}
                        value={userDetails.userEmail}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className='user-registration__control'>
                    <input 
                        type='password'
                        onChange={passwordChangeHandler}
                        placeholder="Password"
                        value={userDetails.userPassword}
                        required
                    />
                </div>
            </div>
            <div className='user-registration__actions'>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;