
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import authUserContext from './context';

const withAuthorization = (condition) => (Component) => {
    class WithAuthorization extends React.Component {

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                (authUser) => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                }
            );
        }

        render() {
            return (
                <authUserContext.Consumer>
                    {(authUser) =>
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </authUserContext.Consumer>
            );
        }

        componentWillUnmount() {
            this.listener();
        }
    }
    return compose(withFirebase, withRouter)(WithAuthorization);
}

export default withAuthorization;

