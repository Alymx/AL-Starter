import React, { Component } from 'react'

import { withAuthorization } from '../../components/Session';

const Article = () => (
    <Product />
)

export class Product extends Component {
    render() {
        return (
            <div>
                Article
            </div>
        )
    }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Article);
