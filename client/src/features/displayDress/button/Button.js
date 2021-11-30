import React from 'react'
import "./Button.css"
import {useSelector} from "react-redux";
import {selectShoppingCard} from "../../home/shoppingCard/shoppingCardSlice";
import {selectSelectedColor, selectSelectedSize} from "../displayDressSlice";

function Button({idDress}) {

    const shoppingCard = useSelector(selectShoppingCard)
    const selectedSize = useSelector(selectSelectedSize)
    const selectedColor = useSelector(selectSelectedColor)

    const checkIfDressAlreadyExistInShoppingCard = (idDress) => {
        const index = shoppingCard.findIndex(item => item.__id === idDress)
        return index !== -1
    }

    return (
        <div className={"displayDress__success__meta__btn"}>
            {
                !checkIfDressAlreadyExistInShoppingCard(idDress) ?
                    <button
                        disabled
                        type={'button'}
                        className={"displayDress__btn__add btnCustom btnCustom"}
                    >Ajouter au panier</button>
                    :
                    <button className={"displayDress__btn__remove btnCustom"}>Retirer du panier</button>
            }
        </div>
    );
}

export default Button;