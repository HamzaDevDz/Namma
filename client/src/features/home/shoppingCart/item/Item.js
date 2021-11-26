import React from 'react'
import './item.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import {useDispatch} from "react-redux";
import {remove__fromShoppingCard} from "../shoppingCardSlice";

function Item({id, title, amount, sizes, price}) {

    const dispatch = useDispatch()

    return (
        <div className={'shoppingCard__items__item'} key={id}>
            <p className="shoppingCard__items__item__title">{title}</p>
            <p className="shoppingCard__items__item__amount">
                x{amount}
                {/*<ChangeCircleIcon className={'shoppingCard__items__item__amount__change'} />*/}
            </p>
            <div className="shoppingCard__items__item__sizes">
                {
                    sizes.map(size => (
                        <p className={'shoppingCard__items__item__sizes__size'}>
                            {size}
                        </p>
                    ))
                }
            </div>
            <p className="shoppingCard__items__item__price">{price*amount} DA</p>
            <DeleteForeverIcon className="shoppingCard__items__item__remove"
                               // fontSize={'small'}
                               onClick={()=>{
                                   dispatch(remove__fromShoppingCard(id))
                               }}
            />
        </div>
    );
}

export default Item;