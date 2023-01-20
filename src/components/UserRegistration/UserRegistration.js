import LoginForm from "./LoginForm";
import './Form.css';

const UserRegistration = (props) => {
    return (
        <div className="user-registration">
            <LoginForm onSignIn={props.onSignIn}></LoginForm>
        </div>
    );
}

export default UserRegistration;