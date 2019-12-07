import React, { Component } from 'react';

import { withAuthorization } from '../../components/Session';


const NewsPage = () => (
    <News />
)

export class News extends Component {
    render() {
        return (
            <div>
                ACTUALITES
            </div>
        )
    }
}


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(NewsPage);