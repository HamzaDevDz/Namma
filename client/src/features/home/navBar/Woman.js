import React from 'react'
import './NavBar.css'

function Woman() {
    return (
        <div className="navBar__box navBar__womanBox">
            <div className="navBar__box__choice">
                <div className="navBar__box__choice__title">Haut</div>
                <div className="navBar__box__choice__types">
                    <p className="navBar__box__choice__types__type">T-Shirt</p>
                    <p className="navBar__box__choice__types__type">Pull</p>
                    <p className="navBar__box__choice__types__type">Chemise</p>
                    <p className="navBar__box__choice__types__type">Veste</p>
                    <p className="navBar__box__choice__types__type">Monteau</p>
                </div>
            </div>
            <div className="navBar__box__choice">
                <div className="navBar__box__choice__title">Bas</div>
                <div className="navBar__box__choice__types">
                    <p className="navBar__box__choice__types__type">Jeans</p>
                    <p className="navBar__box__choice__types__type">Pantaon Toile</p>
                    <p className="navBar__box__choice__types__type">Pantalon Classique</p>
                    <p className="navBar__box__choice__types__type">Short</p>
                    <p className="navBar__box__choice__types__type">Jupe</p>
                </div>
            </div>
        </div>
    );
}

export default Woman;