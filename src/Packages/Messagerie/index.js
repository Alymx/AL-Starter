import React, { Component } from 'react';

import { withAuthorization } from '../../components/Session';

const Messagerie = () => (
    <Messenger />
)

export class Messenger extends Component {
    render() {
        return (
            <div>
                Messagerie
            </div>
        )
    }
}


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Messagerie);