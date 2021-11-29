import React, {useEffect} from 'react'
import './ShoppingCard.css'
import {useDispatch, useSelector} from "react-redux";
import {clear__shoppingCard, selectOpenShoppingCard, selectShoppingCard, selectTotalPrice} from "./shoppingCardSlice";
import Item from "./item/Item";

function ShoppingCard() {

    const dispatch = useDispatch()

    const shoppingCard = useSelector(selectShoppingCard)
    const totalPrice = useSelector(selectTotalPrice)
    const openShoppingCard = useSelector(selectOpenShoppingCard)

    useEffect(()=>{
        if(!openShoppingCard){
            document.querySelector('.shoppingCard').style.display = 'none'
        }
        else{
            document.querySelector('.shoppingCard').style.display = 'flex'
        }
    }, [openShoppingCard])

    return (
        <div className="shoppingCard">
            <p className={'shoppingCard__title'}>Panier</p>
            {
                shoppingCard.length !== 0 ?
                    <div className="shoppingCard__items">
                        {
                            shoppingCard.map(item => <Item id={item.__id}
                                                           title={item.title}
                                                           amount={item.amount}
                                                           sizes={item.sizes}
                                                           price={item.price}
                            />)
                        }
                        <div className="shoppingCard__items__totalPrice">
                            <p className="shoppingCard__items__totalPrice__title">Total</p>
                            <p className="shoppingCard__items__totalPrice__price">{totalPrice} DA</p>
                        </div>
                        <div className="shoppingCard__items__btn">
                            <button className={'shoppingCard__items__btn__command btnCustom'}>Commander</button>
                            <button className="shoppingCard__items__btn__clear btnCustom"
                                    onClick={()=>{
                                        dispatch(clear__shoppingCard())
                                    }}
                            >Vider</button>
                        </div>
                    </div>
                    :
                    ''
            }
        </div>
    );
}

export default ShoppingCard;