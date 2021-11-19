import React, {useEffect, useRef, useState} from 'react'
import './NavBar.css'
import Man from "./Man.js";
import Woman from "./Woman.js";

function NavBar() {

    console.log('NavBar Page')

    return (
        <div className="navBar">
            <div className="navBar__gender">
                <p className="navBar__gender__man">
                    Homme
                </p>
                <Man />
                <p className="navBar__gender__woman">
                    Femme
                </p>
                <Woman />
            </div>
        </div>

    );
}

export default NavBar;