import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { authUserContext } from '../Session';

import { withFirebase } from '../Firebase';
import Navigation from '../Navigation';

import LandingPage from '../Landing';
import HomePage from '../Home';
import AccountPage from '../Account';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import AdminPage from '../Admin';
import PassForgetPage from '../PasswordForget';
import { withAuthentification } from '../Session';

const App = () => (
    <Switch>
        <Navigation />

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.PASS_FORGET} component={PassForgetPage} />

    </Switch>
);


export default withAuthentification(App);