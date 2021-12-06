import React, {useCallback, useEffect, useMemo} from 'react'
import './NavBar.css'
import Man from "./Man.js";
import Woman from "./Woman.js";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useDispatch, useSelector} from "react-redux";
import {selectLengthShoppingCard, toggle__openShoppingCard} from "../shoppingCard/shoppingCardSlice";

function NavBar() {

    console.log('NavBar Page ---------- !')

    const dispatch = useDispatch()

    const lengthShoppingCard = useSelector(selectLengthShoppingCard)

    const handleOpenShoppingCard = useCallback(()=>{
        if(document.querySelector(".navBar__shoppingCard").classList.contains("navBar__shoppingCard__selected")){
            document.querySelector(".navBar__shoppingCard").classList.remove("navBar__shoppingCard__selected")
        }else{
            document.querySelector(".navBar__shoppingCard").classList.add("navBar__shoppingCard__selected")
        }
        dispatch(toggle__openShoppingCard())
    }, [])

    return (
        <div className="navBar" >
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
            <div className={'navBar__shoppingCard'} onClick={handleOpenShoppingCard}>
                <p className={'navBar__shoppingCard__length'}>{lengthShoppingCard}</p>
                <ShoppingBasketIcon className="navBar__shoppingCard__icon" />
            </div>
        </div>

    );
}

export default NavBar;