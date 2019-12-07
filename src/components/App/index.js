import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';

import LandingPage from '../Landing';
import HomePage from '../Home';
import AccountPage from '../Account';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import AdminPage from '../Admin';
import PassForgetPage from '../PasswordForget';
import NewsPage from '../../Packages/NewsPage';
import ArticlePage from '../../Packages/ArticlePage';
import Dashboard from '../../Packages/Dashboard';
import Maps from '../../Packages/Maps';
import Messagerie from '../../Packages/Messagerie';
import SignPage from '../../Packages/SignPage';
import StorePage from '../../Packages/StorePage';
import CartPage from '../../Packages/CartPage';
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

        <Route path={ROUTES.ACTUALITE} component={NewsPage} />
        <Route path={ROUTES.ARTICLE} component={ArticlePage} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.MAPS} component={Maps} />
        <Route path={ROUTES.SIGN} component={SignPage} />
        <Route path={ROUTES.MESSAGERIE} component={Messagerie} />
        <Route path={ROUTES.STORE} component={StorePage} />
        <Route path={ROUTES.PANIER} component={CartPage} />

    </Switch>
);


export default withAuthentification(App);