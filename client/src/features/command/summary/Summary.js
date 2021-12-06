import React, {useState} from 'react'
import "./Summary.css"
import {useSelector} from "react-redux";
import {selectShoppingCard, selectTotalPrice} from "../../shoppingCard/shoppingCardSlice";
import {selectBoolDeliveryAddress, selectDeliveryAddress} from "../commandSlice";

function Summary() {

    const totalPrice = useSelector(selectTotalPrice)
    const priceDelivery = 500

    const boolDeliveryAddress = useSelector(selectBoolDeliveryAddress)
    const deliveryAddress = useSelector(selectDeliveryAddress)
    const shoppingCard = useSelector(selectShoppingCard)

    const [phoneNumber, setPhoneNumber] = useState("")

    const handleCommand = function () {
        document.querySelector(".command__resume__summary__command__btn").classList.add("hide")
        setTimeout(()=>{
            document.querySelector(".command__resume__summary__command__btn").style.display = "none"
            document.querySelector(".command__resume__summary__command__phone").style.display = "flex"
            document.querySelector(".command__resume__summary__command__phone").classList.add("show")
        },300)
    }

    const handleConfirmCommand = function (e) {
        e.preventDefault()
        const newCommand = {
            shoppingCard: shoppingCard,
            totalPrice: totalPrice+priceDelivery,
            deliveryAddress: deliveryAddress,
            phoneNumber: phoneNumber,
        }
    }

    return (
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
            <div className={"command__resume__summary__command"}>
                <button className="command__resume__summary__command__btn btnCustom"
                        disabled={!boolDeliveryAddress}
                        onClick={handleCommand}
                >
                    Confirmer votre commande
                </button>
                <form className={"command__resume__summary__command__phone"}>
                    <p className={"command__resume__summary__command__phone__title"}>Numéro de téléphone :</p>
                    <input type={"text"}
                           className={"command__resume__summary__command__phone__input"}
                           onChange={e => setPhoneNumber(e.target.value)}
                    />
                    <button type={"submit"}
                            className={"command__resume__summary__command__phone__btn btnCustom"}
                            onClick={handleConfirmCommand}
                            disabled={!phoneNumber || !boolDeliveryAddress}
                    >
                        Confirmer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Summary;