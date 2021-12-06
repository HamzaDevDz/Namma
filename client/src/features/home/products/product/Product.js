import React, {useCallback} from 'react'
import "./Product.css"
import {useHistory} from "react-router-dom"

function Product({id, title, description, price, pathPicture}) {

    console.log("Home -> Products -> Product ! -------")
    // console.log(`product-${id}`)

    const history = useHistory()

    const handleClick = useCallback(()=>{
        history.push('./displayDress/'+id)
    }, [id])

    return (
        <div className={'products__product'} onClick={handleClick}>
            <img className={'products__product__picture'} src={pathPicture} alt={''} />
            <p className={'products__product__title'}>{title}</p>
            <p className={'products__product__description'}>{description}</p>
            <p className={'products__product__price'}>{price} DA</p>
        </div>
    );
}

export default Product;