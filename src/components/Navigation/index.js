
import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { authUserContext } from '../Session';

const Navigation = ({ authUser }) => (
    <div>
        <authUserContext.Consumer>
            {(authUser) =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </authUserContext.Consumer>
    </div>
);

const NavigationNonAuth = () => (
    <header>
        {/* <!-- Barre de navigation --> */}
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                {/* <!-- Partie Gauche --> */}
                <div id="header-gauche" className="navbar-header">
                    <button type="button" className="navbar-toggle" data-Toggle="collapse" data-Target="#header-navig" aria-Controls="navbarSupportedContent" aria-Expanded="false" aria-Label="Toggle navigation"><span className="glyphicon glyphicon-menu-hamburger"></span></button>

                    <Link className="logo" to="/">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-Rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg>
                    </Link>
                    {/* <!--                   <Link className="navbar-brand" to="/"> NomSite </Link>--> */}
                </div>
                {/* <!-- Navigation --> */}
                <div id="header-navig" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav" id="touche-navig">
                        <li id="header-search"> <span className="glyphicon glyphicon-search"></span>  <input type="text" placeholder="Discover your next favorite thing..." /> </li>
                        <li> <Link to="deals.html"> Deals </Link> </li>
                        <li> <Link to="jobs.html"> Jobs </Link> </li>
                        <li> <Link to="makers.html"> Makers </Link> </li>
                        <li> <Link to="radio.html"> Radio </Link> </li>
                        <li> <Link to="/"> Ship </Link> </li>
                        <li> <Link to="/"> ••• </Link> </li>
                    </ul>
                    <ul id="connecter" className="nav navbar-nav navbar-right">
                        <li id="login"> <Link to={ROUTES.SIGN_IN}> LOG IN </Link> </li>
                        <li id="signup"> <Link to={ROUTES.SIGN_UP}> SIGN UP </Link> </li>
                    </ul>

                </div>
            </div>

            {/* <!--
           <div className="dynamic_nav">
                <div>
                    <img alt="Cactus" src="https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=50&amp;h=50&amp;fit=crop" srcset="https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=50&amp;h=50&amp;fit=crop&amp;dpr=2 2x, https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=50&amp;h=50&amp;fit=crop&amp;dpr=3 3x" style="width: 50px; height: 50px;" />
                </div>
                <div>
                    <h4> Cactus </h4>
                    <p> A faster and more intuitive way to get things done </p>
                </div>
                <div id="upvoter">
                    <span className="glyphicon glyphicon-triangle-top"></span>
                    UPVOTE <label> 31 </label>
                </div>
            </div>
            --> */}
        </nav>

    </header>
);

const NavigationAuth = () => (
    <header>
        {/* <!-- Barre de navigation --> */}
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                {/* <!-- Partie Gauche --> */}
                <div id="header-gauche" className="navbar-header">
                    <button type="button" className="navbar-toggle" data-Toggle="collapse" data-Target="#header-navig" aria-Controls="navbarSupportedContent" aria-Expanded="false" aria-Label="Toggle navigation"><span className="glyphicon glyphicon-menu-hamburger"></span></button>

                    <Link className="logo" to="/">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-Rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg>
                    </Link>
                    {/* <!--                   <Link className="navbar-brand" to="/"> NomSite </Link>--> */}
                </div>
                {/* <!-- Navigation --> */}
                <div id="header-navig" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav" id="touche-navig">
                        <li id="header-search"> <span className="glyphicon glyphicon-search"></span>  <input type="text" placeholder="Discover your next favorite thing..." /> </li>
                        <li> <Link to="deals.html"> Deals </Link> </li>
                        <li> <Link to="jobs.html"> Jobs </Link> </li>
                        <li> <Link to="makers.html"> Makers </Link> </li>
                        <li> <Link to="radio.html"> Radio </Link> </li>
                        <li> <Link to="/"> Ship </Link> </li>
                        <li> <Link to="/"> ••• </Link> </li>
                    </ul>
                    <ul id="connecter" className="nav navbar-nav navbar-right">
                        <li id="login"> <SignOutButton /> </li>
                        <li id="signup"> <Link to={ROUTES.SIGN_UP}> SIGN UP </Link> </li>
                    </ul>
                    <ul>
                        <li> <Link to={ROUTES.LANDING}> Landing </Link> </li>
                        <li> <Link to={ROUTES.HOME}> Home </Link> </li>
                        <li> <Link to={ROUTES.ACCOUNT}> Account </Link> </li>
                        <li> <Link to={ROUTES.ADMIN}> Admin </Link> </li>
                    </ul>

                </div>
            </div>

            {/* <!--
           <div className="dynamic_nav">
                <div>
                    <img alt="Cactus" src="https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=50&amp;h=50&amp;fit=crop" srcset="https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=50&amp;h=50&amp;fit=crop&amp;dpr=2 2x, https://ph-files.imgix.net/852d59a9-f78e-484c-a4f9-7a8aa2d5b3bf?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=50&amp;h=50&amp;fit=crop&amp;dpr=3 3x" style="width: 50px; height: 50px;" />
                </div>
                <div>
                    <h4> Cactus </h4>
                    <p> A faster and more intuitive way to get things done </p>
                </div>
                <div id="upvoter">
                    <span className="glyphicon glyphicon-triangle-top"></span>
                    UPVOTE <label> 31 </label>
                </div>
            </div>
            --> */}
        </nav>

    </header>

);
export default Navigation;