import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const SignUpPage = () => (
    <div style={{ "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%,-50%)", "margin": "0 auto", "width": "80%", "max-width": "800px" }}>
        <h1>Sign Up Page</h1>
        <SignUpForm />

    </div>
);

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }; //Destructuration d'objet
    }

    onSubmit = (event) => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser) => {
                //Creation d'un User dans la RTDB
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch((error) => {
                this.setState({ error });
            });

        event.preventDefault();

    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        const { username, email, passwordOne, passwordTwo, error } = this.state;

        const isInvalid = passwordOne !== passwordTwo
            || email === ''
            || username === ''
            || passwordOne === '';

        return (
            <form onSubmit={this.onSubmit} >
                <fieldset>
                    <legend> Ajouter un Compte </legend>
                    <div className="form-group">
                        <label for="username">Nom Complet</label>
                        <input className="form-control" type="text" id="username" name="username" value={username} onChange={this.onChange} placeholder="Entrer votre nom complet" />
                    </div>
                    <div className="form-group">
                        <label for="email">Adresse Mail</label>
                        <input className="form-control" type="email" id="email" name="email" value={email} onChange={this.onChange} placeholder="Entrer votre mail" />
                    </div>
                    <div className="form-group">
                        <label for="passwordOne">Mot de Passe</label>
                        <input className="form-control" type="password" id="passwordOne" name="passwordOne" value={passwordOne} onChange={this.onChange} placeholder="Password..." />
                    </div>
                    <div className="form-group">
                        <label for="passwordTwo">Confirmation de Mot de Passe</label>
                        <input className="form-control" type="password" id="passwordTwo" name="passwordTwo" value={passwordTwo} onChange={this.onChange} placeholder="Confirm Password..." />
                    </div>
                    <button disabled={isInvalid} type="submit" className="btn btn-primary"> S'inscrire </button>
                    {error && <p> {error.message} </p>}
                </fieldset>
            </form>
        );
    }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

const SignUpLink = () => (
    <p> Vous n'avez pas de compte? <Link to={ROUTES.SIGN_UP}> Creer un compte </Link> </p>
);


export default SignUpPage;
export { SignUpLink, SignUpForm };