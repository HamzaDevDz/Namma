import React from 'react';
import "./Container.css"
import DeliveryAddress from "./deliveryAddress/DeliveryAddress";
import ShoppingCardCommand from "./shoppingCardCommand/ShoppingCardCommand";

function Container() {
    return (
        <div className="command__resume__container">
            {/*Delivery Address*/}
            <DeliveryAddress />
            {/*Shopping Card*/}
            <ShoppingCardCommand />
        </div>
    );
}

export default Container;