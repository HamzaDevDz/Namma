import React, {useEffect, useRef, useState} from 'react'
import './NavBar.css'
import Man from "./Man.js";
import Woman from "./Woman.js";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useDispatch, useSelector} from "react-redux";
import {selectLengthShoppingCard, toggle__openShoppingCard} from "../shoppingCart/shoppingCardSlice";

function NavBar() {

    console.log('NavBar Page')

    const dispatch = useDispatch()

    const lengthShoppingCard = useSelector(selectLengthShoppingCard)

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
            <div className={'navBar__shoppingCard'} onClick={()=>{
                dispatch(toggle__openShoppingCard())
            }}>
                <p className={'navBar__shoppingCard__length'}>{lengthShoppingCard}</p>
                <ShoppingBasketIcon className="navBar__shoppingCard__icon" />
            </div>
        </div>

    );
}

export default NavBar;