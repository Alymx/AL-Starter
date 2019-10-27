import React from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: '',
}


class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        const { passwordOne } = this.state;

        this.props.firebase.doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch((error) => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    render() {

        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid = passwordOne === '' || passwordOne !== passwordTwo;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="passwordOne"> Nouveau Mot De Passe </label>
                    <input type="password" className="form-control" name="passwordOne" id="passwordOne" value={passwordOne} placeholder="Nouveau Mot De Passe" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label for="passwordTwo"> Confirmer Mot De Passe </label>
                    <input type="password" className="form-control" name="passwordTwo" id="passwordTwo" value={passwordTwo} placeholder="Confirmer Mot De Passe" onChange={this.onChange} />
                </div>
                <button className="btn btn-success" disabled={isInvalid} type="submit"> Mettre a Jour </button>
                {error && <p> {error.message} </p>}
            </form>
        );
    }

}



export default withFirebase(PasswordChangeForm);