import React, {useEffect, useState} from 'react'
import "./Products.css"
import {useDispatch, useSelector} from "react-redux";
import {getProducts, selectProducts, selectStatusProducts} from "./productsSlice";
import Product from "./product/Product";

function Products() {

    console.log("Home -> Products ! --------")

    const dispatch = useDispatch()

    const loadProducts = useSelector(selectStatusProducts)
    const products = useSelector(selectProducts)

    useEffect(()=>{
        dispatch(getProducts())
    }, [])

    return (
        <div className={'products'}>
            {
                !loadProducts ?
                    products.length !== 0 ?
                        products.map(({_id, title, description, price, pathPicture}) => (
                            <Product id={_id}
                                     key={_id}
                                     title={title}
                                     description={description}
                                     price={price}
                                     pathPicture={pathPicture}
                            />
                        ))
                        :
                        <div className={'products__empty'}>
                            Aucun vêtement disponible !
                        </div>
                    :
                    <div className={'products__loading'}>
                        Loading Products ...
                    </div>
            }
        </div>
    );
}

export default Products;