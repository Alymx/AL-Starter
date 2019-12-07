import React, { Component } from 'react';

import { withAuthorization } from '../../components/Session';

const Cart = () => (
    <panier />
)

export class Panier extends Component {
    render() {
        return (
            <div>
                Panier
            </div>
        )
    }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Cart);

