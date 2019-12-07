import React, { Component } from 'react';

import { withAuthorization } from '../../components/Session';

const StorePage = () => (
    <Store />
);

export class Store extends Component {
    render() {
        return (
            <div>
                Stores
            </div>
        )
    }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(StorePage);