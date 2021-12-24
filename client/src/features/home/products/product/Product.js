import React, {useCallback} from 'react'
import "./Product.css"
import {useHistory} from "react-router-dom"
import {getImagePrefix, serverPrefix} from "../../../../ServerPrefix";

function Product({id, title, description, price, pathPicture}) {

    console.log("Home -> Products -> Product ! -------")

    const history = useHistory()

    const handleClick = useCallback(()=>{
        history.push('./displayDress/'+id)
    }, [id])

    return (
        <div className={'products__product'} onClick={handleClick}>
            <img className={'products__product__picture'} src={getImagePrefix + pathPicture} alt={''} />
            <p className={'products__product__title'}>{title}</p>
            <p className={'products__product__description'}>{description}</p>
            <p className={'products__product__price'}>{price} DA</p>
        </div>
    );
}

export default Product;