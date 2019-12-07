import React from 'react';

import { ACTUALITE } from '../../../constants/routes';
import { Link } from 'react-router-dom';


const Activite = ({ nom, description }) => {
    return (
        <li class="domain card">
            <Link to={ACTUALITE} class="face face1">
                <div class="content">
                    <span class="glyphicon glyphicon-option-horizontal"></span>
                    <h3> {nom} </h3>
                </div>
            </Link>
            <div class="face face2">
                <div class="content">
                    <p>{description}</p>
                    <Link to={ACTUALITE}> Lire Plus</Link>
                </div>
            </div>
        </li>
    )
}

export default Activite;
