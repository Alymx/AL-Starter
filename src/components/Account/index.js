import React from 'react';

import PasswordChangeForm from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';
import { authUserContext, withAuthorization } from '../Session';

const AccountPage = () => (
    <authUserContext.Consumer>
        {(authUser) =>
            <div style={{ "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%,-50%)", "margin": "0 auto", "width": "80%", "max-width": "800px" }}>
                <h1>Compte: {authUser.email}</h1>
                <PasswordChangeForm />
                <PasswordForgetForm />
            </div>
        }

    </authUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);