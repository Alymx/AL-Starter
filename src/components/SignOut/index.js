import React from 'react';
import { withFirebase } from '../Firebase';

import { LANDING } from '../../constants/routes';
import { Link } from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
    <Link type="button" onClick={firebase.doSignOut}>
        SIGN OUT
    </Link>
);
export default withFirebase(SignOutButton);