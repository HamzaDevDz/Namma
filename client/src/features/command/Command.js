import React, {useRef, useState} from 'react'
import "./Command.css"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {useSelector} from "react-redux";
import {selectShoppingCard, selectTotalPrice} from "../shoppingCard/shoppingCardSlice";
import ItemCommand from "./itemCommand/ItemCommand";

function Command() {

    const [deliveryAddress, setDeliveryAddress] = useState("")
    const shoppingCard = useSelector(selectShoppingCard)
    const totalPrice = useSelector(selectTotalPrice)
    const refInputDeliveryAddress = useRef("")
    const priceDelivery = 500

    const handleClickSetDeliveryAddress = function () {
        document.querySelector(".command__resume__shoppingCard__deliveryAddress__meta").classList.remove("show")
        document.querySelector(".command__resume__shoppingCard__deliveryAddress__meta").classList.add("hide")
        document.querySelector(".command__resume__shoppingCard__deliveryAddress__form").classList.remove("hide")
        document.querySelector(".command__resume__shoppingCard__deliveryAddress__form").classList.add("show")
    }

    return (
        <div className="command">
            <p className="command__title">Commander</p>
            <div className="command__resume">
                <div className="command__resume__shoppingCard">
                    <div className="command__resume__shoppingCard__deliveryAddress">
                        <div className="command__resume__shoppingCard__deliveryAddress__meta">
                            {
                                deliveryAddress.length !== 0 ?
                                    <>
                                        <p className="command__resume__shoppingCard__deliveryAddress__meta__title">Adresse de livraison :</p>
                                        <p className="command__resume__shoppingCard__deliveryAddress__meta__text">{deliveryAddress}</p>
                                        <button className="command__resume__shoppingCard__deliveryAddress__meta__btn__change">Changer</button>
                                    </>
                                    :
                                    <>
                                        <button className="command__resume__shoppingCard__deliveryAddress__meta__btn__set btnCustom"
                                                onClick={handleClickSetDeliveryAddress}
                                        >
                                            Définir l'adresse de livraison
                                        </button>
                                        <ErrorOutlineIcon className="command__resume__shoppingCard__deliveryAddress__meta__exclamationPoint" />
                                    </>
                            }
                        </div>
                        <form action="" className="command__resume__shoppingCard__deliveryAddress__form">
                            <p className="command__resume__shoppingCard__deliveryAddress__form__title">Adresse de livraison :</p>
                            <input ref={refInputDeliveryAddress} type="text" className="command__resume__shoppingCard__deliveryAddress__form__input"/>
                            <button type={"submit"} className="command__resume__shoppingCard__deliveryAddress__form__btn btnCustom">Confirmer</button>
                        </form>
                    </div>

                    <div className="command__resume__shoppingCard__container">
                        {
                            shoppingCard.map(item => (
                                <ItemCommand id={item.__id}
                                             pathPicture={item.pathPicture}
                                             title={item.title}
                                             description={item.description}
                                             price={item.price}
                                             size={item.size}
                                             color={item.color}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="command__resume__summary">
                    <p className="command__resume__summary__title">Récapitulatif</p>
                    <div className="command__resume__summary__information">
                        <div className="command__resume__summary__information__subTotal">
                            <p className="command__resume__summary__information__subTotal__title">Sous-Total</p>
                            <p className="command__resume__summary__information__subTotal__price">{totalPrice} DA</p>
                        </div>
                        <div className="command__resume__summary__information__delivery">
                            <p className="command__resume__summary__information__delivery__title">Livraison</p>
                            <p className="command__resume__summary__information__delivery__price">{priceDelivery} DA</p>
                        </div>
                        <div className="command__resume__summary__information__total">
                            <p className="command__resume__summary__information__total__title">Total</p>
                            <p className="command__resume__summary__information__total__price">{totalPrice + priceDelivery} DA</p>
                        </div>
                    </div>
                    <div className="command__resume__summary__nb">
                        <p className="command__resume__summary__nb__title">Important</p>
                        <p className="command__resume__summary__nb__text">
                            Le payment s'effectuera dès la livraison !
                        </p>
                    </div>
                    <button className="command__resume__summary__btn__command btnCustom"
                            disabled={!deliveryAddress}
                    >
                        Confirmer votre commande
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Command;