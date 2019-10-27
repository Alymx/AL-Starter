import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <div style={{ "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%,-50%)", "margin": "0 auto", "width": "80%", "max-width": "800px" }}>
        <h1>SignIn page</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
}

class SignInFormBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;
        event.preventDefault();
        this.props.firebase.doSIgnInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        const { email, password, error } = this.state;

        const isInvalid = email === '' || password === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="email"> Adresse Mail </label>
                    <input className="form-control" type="email" id="email" name="email" value={email} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label for="password"> Mot de passe </label>
                    <input className="form-control" type="password" id="password" name="password" value={password} onChange={this.onChange} />
                </div>
                <button className="btn btn-primary" disabled={isInvalid} type="submit"> Se Connecter </button>
                {error && <p> {error.message} </p>}
            </form>
        );
    }

}

const SignInForm = compose(withFirebase, withRouter)(SignInFormBase);



export default SignInPage;
export { SignInForm };