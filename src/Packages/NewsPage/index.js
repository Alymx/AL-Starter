import React, { Component } from 'react';

import { withAuthorization } from '../../components/Session';
import { Link } from 'react-router-dom';
import './Actualite.css';

const NewsPage = () => (
    <News />
)

export class News extends Component {
    render() {
        return (
            <section className="corpus">
                <section className="section_gauche">

                    <div className="entete">
                        <div className="titre">
                            <Link to="home.html"><h1> Actualités </h1></Link>
                            <div className="notification">
                                <span> 07.11.2019 </span>
                            </div>
                        </div>
                    </div>
                    <div className="actualite">
                        <ul className="liste">

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#" title="Profil" data-toggle="tooltip" data-placement="right"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label title="145000 XAF" data-toggle="tooltip" data-placement="bottom"> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/bananas-1119790_1920.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#" title="commentaire" data-toggle="tooltip" data-placement="bottom"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#" title="Maps" data-toggle="tooltip" data-placement="bottom"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#" title="Transaction" data-toggle="tooltip" data-placement="left"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/pc-1571963.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/cake-1971552.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/cake-2856551.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/cake-486874.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/eat-2834549.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/iphone-3501507_1920.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/lime-907124.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/lime-998903.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/london-3748742.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/macbook-1999633.png" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/mockup-654585.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/pc-1571963.jpg" alt="image" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="article">
                                    <div id="tete">
                                        <div id="imageProfil">
                                            <Link to="#"><img src="Assets/icones/profile.svg" width="25px" alt="pic" /></Link>

                                        </div>
                                        <h4> John Doe
                                  <Link to="#"> • Suivre </Link>
                                        </h4>
                                        <div id="price">
                                            <Link to="#"><label> 145
                                      <span title="Roonies" className="rounais"> R </span>
                                            </label></Link>
                                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                                        </div>
                                    </div>
                                    <div id="media">
                                        <Link to="articles.html">
                                            <img className="multimed" src="Assets/images/Article/pineapple-636562_1920.jpg" alt="imageur" />
                                        </Link>
                                    </div>
                                    <div id="description">
                                        <div>
                                            <label> #John DOE </label>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at, dolores labore quidem iusto quas, aut dicta assumenda sunt non a pariatur earum, itaque nihil unde sed consectetur ea nostrum.  </p>
                                        </div>

                                        <div id="plus">
                                            <Link to="#"><img src="Assets/icones/comment.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/locate.svg" alt="" width="30px" /></Link>
                                            <Link to="#"><img src="Assets/icones/sell.svg" alt="" width="30px" /></Link>

                                        </div>
                                    </div>
                                    <div id="comment">
                                        <form className="formulaire avis">
                                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                                            <input type="text" placeholder="Votre commentaire..." />
                                            <button className="btn btn-default">
                                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                                            </button>
                                        </form>
                                        <div className="notification">
                                            <Link to="#" id="like"> <span> 123 </span> j'aime </Link>
                                            <p id="delai"> il y'a <span> 14 jours </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </li>


                        </ul>
                    </div>

                </section>


                <section className="section_droite">

                    <div className="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.444342583682!2d11.479809528278256!3d3.8399832553066995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfcfba91be3b%3A0x3eb618bb8fc3a303!2sBiyem-Assi%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1573252016479!5m2!1sfr!2scm" width="600" height="450" frameborder="0" style={{ "border": "0" }} allowfullscreen=""></iframe>
                    </div>
                    <div className="cartographe">
                        <h2> NIKI BIYEM-ASSI </h2>
                        <button> Voir Plus </button>
                        <div id="detail_cart">
                            <ul>
                                <li>
                                    <label>Distance :</label>
                                    <span>14km</span>
                                </li>

                                <li>
                                    <label>Stock restant :</label>
                                    <span>150 unites</span>
                                </li>

                                <li>
                                    <label>Standing :</label>
                                    <span>***</span>
                                </li>

                                <li>
                                    <label>Points de vente :</label>
                                    <span>05</span>
                                </li>

                                <li>
                                    <label>Prix unitaire :</label>
                                    <span> - - - </span>
                                </li>

                                <li>
                                    <label>Ville :</label>
                                    <span>Yaounde</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(NewsPage);