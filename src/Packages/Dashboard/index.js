import React, { Component } from 'react'

import { withAuthorization } from '../../components/Session';

const Dashboard = () => (
    <Board />
)

export class Board extends Component {
    render() {
        return (
            <div>
                <p>Dashboard</p>
            </div>
        )
    }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Dashboard);