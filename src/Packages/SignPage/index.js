import React, { Component } from 'react'

import './Sign.css';
import { Link } from 'react-router-dom';
import { googleSignIn } from '../../components/Navigation';
import * as ROUTES from '../../constants/routes';

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="back">


                    <div className="search">
                        <div className="logo">
                            <img src="Assets/icones/Logo.png" alt="Makissy" />
                        </div>
                        <div className="texte">
                            <input type="text" disabled style={{ "background": "#fece8c" }} />
                            <Link onClick={(evt) => googleSignIn()} to={ROUTES.LANDING} >
                                <svg id="google-logo" title="Connexion via Google" data-toggle="tooltip" data-placement="bottom" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gofore" className="svg-inline--fa fa-gofore fa-w-13" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 512" width="18px"><path fill="currentColor" d="M324 319.8h-13.2v34.7c-24.5 23.1-56.3 35.8-89.9 35.8-73.2 0-132.4-60.2-132.4-134.4 0-74.1 59.2-134.4 132.4-134.4 35.3 0 68.6 14 93.6 39.4l62.3-63.3C335 55.3 279.7 32 220.7 32 98 32 0 132.6 0 256c0 122.5 97 224 220.7 224 63.2 0 124.5-26.2 171-82.5-2-27.6-13.4-77.7-67.7-77.7zm-12.1-112.5H205.6v89H324c33.5 0 60.5 15.1 76 41.8v-30.6c0-65.2-40.4-100.2-88.1-100.2z"></path></svg>
                            </Link>


                        </div>

                    </div>


                </div>
                <p id="copyright">
                    <Link to="aldesigners.net">copyright©2019 ALDesigners  </Link>
                </p>
            </div>
        )
    }
}
