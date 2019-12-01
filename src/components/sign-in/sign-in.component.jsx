import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: "", password: '' });
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput label="Email" name="email" type="email" value={ this.state.email } required handleChange={ this.handleChange } />
                    <FormInput label="Password" name="password" type="password" value={ this.state.password } required handleChange={ this.handleChange } />
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Google sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;