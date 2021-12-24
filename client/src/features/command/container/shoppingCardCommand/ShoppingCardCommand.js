import React from 'react';
import "./ShoppingCardCommand.css"
import ItemCommand from "./itemCommand/ItemCommand";
import {useSelector} from "react-redux";
import {selectShoppingCard} from "../../../shoppingCard/shoppingCardSlice";

function ShoppingCardCommand() {

    const shoppingCard = useSelector(selectShoppingCard)

    return (
        <div className="command__resume__container__shoppingCard">
            {
                shoppingCard.map(item => (
                    <ItemCommand id={item.id}
                                 key={item.id}
                                 pathPicture={item.pathPicture}
                                 title={item.title}
                                 description={item.description}
                                 price={item.price}
                                 size={item.size}
                                 color={item.color}
                    />
                ))
            }
        </div>
    );
}

export default ShoppingCardCommand;