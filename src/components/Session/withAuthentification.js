
import React from 'react';

import authUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentification = (Component) => {
    class WithAuthentification extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                authUser: null,
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
                authUser ? this.setState({ authUser }) : this.setState({ authUser: null })
            });
        }

        render() {

            return (
                <authUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </authUserContext.Provider>
            )
        }

        componentWillUnmount() {
            this.listener();
        }


    }
    return withFirebase(WithAuthentification);
}

export default withAuthentification;