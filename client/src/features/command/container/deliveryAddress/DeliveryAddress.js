import React, {useState} from 'react';
import "./DeliveryAddress.css"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {useDispatch, useSelector} from "react-redux";
import {selectBoolDeliveryAddress, toggleBoolDeliveryAddress, setDeliveryAddress} from "../../commandSlice";

function DeliveryAddress() {

    const [address, setAddress] = useState("")

    const boolDeliveryAddress = useSelector(selectBoolDeliveryAddress)

    const dispatch = useDispatch()

    const handleClickSetDeliveryAddress = function () {
        document.querySelector(".command__resume__container__deliveryAddress__meta").classList.remove("show")
        document.querySelector(".command__resume__container__deliveryAddress__meta").classList.add("hide")
        setTimeout(()=>{
            document.querySelector(".command__resume__container__deliveryAddress__meta").style.display = "none"
            document.querySelector(".command__resume__container__deliveryAddress__form").style.display = "flex"
            document.querySelector(".command__resume__container__deliveryAddress__form").classList.remove("hide")
            document.querySelector(".command__resume__container__deliveryAddress__form").classList.add("show")
            dispatch(toggleBoolDeliveryAddress(false))
            dispatch(setDeliveryAddress(""))
        }, 300)
    }

    const handleConfirmDeliveryAddress = function (e) {
        e.preventDefault()
        document.querySelector(".command__resume__container__deliveryAddress__form").classList.remove("show")
        document.querySelector(".command__resume__container__deliveryAddress__form").classList.add("hide")
        dispatch(toggleBoolDeliveryAddress(true))
        dispatch(setDeliveryAddress(address))
        setTimeout(()=>{
            document.querySelector(".command__resume__container__deliveryAddress__form").style.display = "none"
            document.querySelector(".command__resume__container__deliveryAddress__meta").style.display = "flex"
            document.querySelector(".command__resume__container__deliveryAddress__meta").classList.remove("hide")
            document.querySelector(".command__resume__container__deliveryAddress__meta").classList.add("show")
        }, 300)
    }

    return (
        <div className="command__resume__container__deliveryAddress">
            <div className="command__resume__container__deliveryAddress__meta">
                {
                    boolDeliveryAddress ?
                        <>
                            <p className="command__resume__container__deliveryAddress__meta__title">Adresse de livraison :</p>
                            <p className="command__resume__container__deliveryAddress__meta__text">{address}</p>
                            <button
                                className="command__resume__container__deliveryAddress__meta__btn__change btnCustom"
                                onClick={handleClickSetDeliveryAddress}
                            >Changer
                            </button>
                        </>
                        :
                        <>
                            <button
                                className="command__resume__container__deliveryAddress__meta__btn__set btnCustom"
                                onClick={handleClickSetDeliveryAddress}
                            >
                                Définir l'adresse de livraison
                            </button>
                            <ErrorOutlineIcon
                                className="command__resume__container__deliveryAddress__meta__exclamationPoint"/>
                        </>
                }
            </div>
            <form action="" className="command__resume__container__deliveryAddress__form">
                <p className="command__resume__container__deliveryAddress__form__title">Adresse de livraison :</p>
                <input onChange={e => setAddress(e.target.value)}
                       type="text"
                       className="command__resume__container__deliveryAddress__form__input"/>
                <button type={"submit"}
                        className="command__resume__container__deliveryAddress__form__btn btnCustom"
                        onClick={handleConfirmDeliveryAddress}
                        disabled={!address}
                >Confirmer
                </button>
            </form>
        </div>
    );
}

export default DeliveryAddress;