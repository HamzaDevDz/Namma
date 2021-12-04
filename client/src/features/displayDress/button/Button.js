import React, {useCallback, useEffect, useMemo, useState} from 'react'
import "./Button.css"
import {useDispatch, useSelector} from "react-redux";
import {
    add__toShoppingCard,
    remove__fromShoppingCard,
    selectShoppingCard
} from "../../shoppingCard/shoppingCardSlice";
import {selectDisplayDress, selectSelectedColor, selectSelectedSize} from "../displayDressSlice";

function Button() {

    console.log("Button Page ---------- !")

    const dispatch = useDispatch()

    const shoppingCard = useSelector(selectShoppingCard)
    const selectedSize = useSelector(selectSelectedSize)
    const selectedColor = useSelector(selectSelectedColor)
    const displayDress = useSelector(selectDisplayDress)

    const [checkIfDressAlreadyExistInShoppingCard, setCheckIfDressAlreadyExistInShoppingCard] = useState(false)

    useEffect(()=>{
        const index = shoppingCard.findIndex(item => item.__id === displayDress.__id)
        setCheckIfDressAlreadyExistInShoppingCard(index !== -1)
    }, [shoppingCard.length])

    const handleAddShoppingCard = function() {
        const newItem = {
            __id: displayDress.__id,
            pathPicture: displayDress.pathPictures[0],
            title: displayDress.title,
            description: displayDress.description,
            size: selectedSize,
            color: selectedColor,
            price: displayDress.price
        }
        dispatch(add__toShoppingCard(newItem))
    }

    const handleRemoveFromShoppingCard = function () {
        dispatch(remove__fromShoppingCard(displayDress.__id))
    }

    return (
        <div className={"displayDress__success__meta__btn"}>
            {
                !checkIfDressAlreadyExistInShoppingCard ?
                    <button
                        disabled={!selectedSize || !selectedColor}
                        type={'button'}
                        className={"displayDress__btn__add btnCustom"}
                        onClick={handleAddShoppingCard}
                    >Ajouter au panier</button>
                    :
                    <button className={"displayDress__btn__remove btnCustom"}
                            onClick={handleRemoveFromShoppingCard}
                    >Retirer du panier</button>
            }
        </div>
    );
}

export default Button;