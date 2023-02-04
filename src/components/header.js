import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (

            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Bienvenue sur le site officiel d'Irmaa</div>
                    <div className="masthead-heading text-uppercase">Le chatbot des astres</div>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#services">Commencer maintenant</a>
                </div>
            </header>

        )

    }

}

export default Header;