import React, {useEffect} from 'react'
import './ShoppingCard.css'
import {useDispatch, useSelector} from "react-redux";
import {clear__shoppingCard, selectOpenShoppingCard, selectShoppingCard, selectTotalPrice} from "./shoppingCardSlice";
import Item from "./item/Item";
import {useHistory} from "react-router-dom";

function ShoppingCard() {

    console.log("ShoppingCard Page ! -------")

    const dispatch = useDispatch()

    const shoppingCard = useSelector(selectShoppingCard)
    const totalPrice = useSelector(selectTotalPrice)
    const openShoppingCard = useSelector(selectOpenShoppingCard)

    const history = useHistory()

    useEffect(()=>{
        if(!openShoppingCard){
            document.querySelector(".shoppingCard").classList.remove('show')
            document.querySelector(".shoppingCard").classList.add('hide')
            setTimeout(()=>{
                document.querySelector('.shoppingCard').style.display = 'none'
            }, 300)

        }
        else{
            document.querySelector('.shoppingCard').style.display = 'flex'
            document.querySelector(".shoppingCard").classList.remove('hide')
            document.querySelector(".shoppingCard").classList.add('show')
        }
    }, [openShoppingCard])

    return (
        <div className="shoppingCard">
            <p className={'shoppingCard__title'}>Panier</p>
            {
                shoppingCard.length !== 0 ?
                    <div className="shoppingCard__items">
                        {
                            shoppingCard.map(item => <Item id={item.id}
                                                           key={item.id}
                                                           title={item.title}
                                                           size={item.size}
                                                           color={item.color}
                                                           price={item.price}
                            />)
                        }
                        <div className="shoppingCard__items__totalPrice">
                            <p className="shoppingCard__items__totalPrice__title">Total</p>
                            <p className="shoppingCard__items__totalPrice__price">{totalPrice} DA</p>
                        </div>
                        <div className="shoppingCard__items__btn">
                            <button className={'shoppingCard__items__btn__command btnCustom'}
                                    onClick={() => history.push("/command")}
                            >Commander</button>
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