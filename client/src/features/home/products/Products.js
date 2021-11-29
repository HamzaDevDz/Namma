import React from 'react'
import "./Products.css"
import {useSelector} from "react-redux";
import {selectProducts, selectStatusProducts} from "./productsSlice";
import Product from "./product/Product";

function Products() {

    const statusProducts = useSelector(selectStatusProducts)
    const products = useSelector(selectProducts)

    return (
        <div className={'products'}>
            {
                !statusProducts ?
                    products.length !== 0 ?
                        products.map(({__id, title, description, price, pathPicture}) => (
                            <Product id={__id}
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