import React, { Component } from 'react';

// import { withAuthorization } from '../Session';
import Activite from './Activite';
import './Landing.css';

const Landing = () => (
    <Atterissage />
);

export class Atterissage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activites: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    }


    render() {

        const Activites = this.state.activites.map((index) => (
            <Activite key={index} nom={"Domaine" + index} description={index + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste."} />
        ));

        return (
            <div>
                <div class="back">

                    <div class="search">
                        <div class="logo">
                            <img src="Assets/icones/Logo.png" alt="Makissy" />
                        </div>
                        <div class="texte">
                            <input type="text" />
                            <img id="intuitive" src="Assets/icones/rechercheintuitivex1.png" alt="||" />
                        </div>

                    </div>

                    <ul class="sectors container">

                        {Activites}

                    </ul>

                </div>
                <p id="copyright">
                    <a href="al.cm">Propulsé par copyright©2019 ALDesigners  </a>
                </p>
            </div>
        )
    }
}


// const condition = (authUser) => !!authUser;

export default Landing;