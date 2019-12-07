import React, { Component } from 'react'

import { withAuthorization } from '../../components/Session';

const Maps = () => (
    <Plan />
)

export class Plan extends Component {
    render() {
        return (
            <div>
                MAPS
            </div>
        )
    }
}



const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Maps);