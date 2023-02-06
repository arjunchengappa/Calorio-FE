import SignInForm from "./SignInForm";
import './Form.css';
import { Component } from "react";

class UserRegistration extends Component {
	render() {
		return (
			<div className="user-registration">
				<SignInForm onSignIn={this.props.onSignIn}></SignInForm>
			</div>
		);
	}
}

export default UserRegistration;