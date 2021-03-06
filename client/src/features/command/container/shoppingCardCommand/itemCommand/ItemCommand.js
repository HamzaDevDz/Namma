import React, {useState} from 'react';
import "./ItemCommand.css"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {useDispatch} from "react-redux";
import {remove__fromShoppingCard} from "../../../../shoppingCard/shoppingCardSlice";
import {getImagePrefix} from "../../../../../ServerPrefix";

function ItemCommand({id, pathPicture, title, description, price, size, color}) {

    const dispatch = useDispatch()

    const handleRemoveItemFromShoppingCard = function () {
        dispatch(remove__fromShoppingCard(id))
    }

    return (
        <div key={id} className="command__resume__shoppingCard__container__itemCommand">
            <img src={getImagePrefix + pathPicture} alt="" className="command__resume__shoppingCard__container__itemCommand__picture"/>
            <div className="command__resume__shoppingCard__container__itemCommand__information">
                <p className="command__resume__shoppingCard__container__itemCommand__information__title">{title}</p>
                <p className="command__resume__shoppingCard__container__itemCommand__information__description">{description}</p>
            </div>
            <p className="command__resume__shoppingCard__container__itemCommand__price">{price} DA</p>
            <div className="command__resume__shoppingCard__container__itemCommand__params">
                <div className="command__resume__shoppingCard__container__itemCommand__params__size">
                    <p className="command__resume__shoppingCard__container__itemCommand__params__size__text">{size}</p>
                    {/*<button className="command__resume__shoppingCard__container__itemCommand__params__size__btn btnCustom">Changer</button>*/}
                </div>
                <div className="command__resume__shoppingCard__container__itemCommand__params__color">
                    <p className="command__resume__shoppingCard__container__itemCommand__params__color__text">{color}</p>
                    {/*<button className="command__resume__shoppingCard__container__itemCommand__params__color__btn btnCustom">Changer</button>*/}
                </div>
            </div>
            <div className="command__resume__shoppingCard__container__itemCommand__remove"
                 onClick={handleRemoveItemFromShoppingCard}
            >
                <DeleteForeverIcon className="command__resume__shoppingCard__container__itemCommand__remove__icon"/>
            </div>
        </div>
    );
}

export default ItemCommand;