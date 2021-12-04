import React from 'react'
import './item.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useDispatch} from "react-redux";
import {remove__fromShoppingCard} from "../shoppingCardSlice";

function Item({id, title, size, color, price}) {

    const dispatch = useDispatch()

    return (
        <div className={'shoppingCard__items__item'} key={id}>
            <p className="shoppingCard__items__item__title">{title}</p>
            <p className="shoppingCard__items__item__size">
                {size}
            </p>
            <p className="shoppingCard__items__item__color">
                {color}
            </p>
            <p className="shoppingCard__items__item__price">{price} DA</p>
            <DeleteForeverIcon className="shoppingCard__items__item__remove"
                               onClick={()=>{
                                   dispatch(remove__fromShoppingCard(id))
                               }}
            />
        </div>
    );
}

export default Item;