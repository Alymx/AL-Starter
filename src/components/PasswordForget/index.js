import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
    <div style={{ "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%,-50%)", "margin": "0 auto", "width": "80%", "max-width": "800px" }}>
        <h1>PasswordChange Page</h1>
        <PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
}

class PasswordForgetFormBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        const { email } = this.state;

        this.props.firebase.doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.SIGN_IN);
            })
            .catch((error) => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    render() {

        const { email, error } = this.state;

        const isInvalid = email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="email"> Email de récupération </label>
                    <input type="email" className="form-control" name="email" id="email" value={email} placeholder="Email for Recovery" onChange={this.onChange} />
                </div>
                <button className="btn btn-danger" disabled={isInvalid} type="submit"> Recovery </button>
                {error && <p> {error.message} </p>}
            </form>
        );

    }

}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASS_FORGET}> Mot de Passe Oublié...? </Link>
    </p>
);

const PasswordForgetForm = withRouter(withFirebase(PasswordForgetFormBase));


export default PasswordForgetPage;
export { PasswordForgetForm, PasswordForgetLink };