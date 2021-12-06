import React, {useEffect} from 'react'
import "./Command.css"
import Container from "./container/Container";
import Summary from "./summary/Summary";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectShoppingCard} from "../shoppingCard/shoppingCardSlice";

function Command() {

    console.log("Command Page ! ------------")

    const history = useHistory()

    const shoppingCard = useSelector(selectShoppingCard)

    useEffect(()=>{
       if(shoppingCard.length === 0){
           history.push("/home")
       }
    }, [shoppingCard.length])

    return (
        <div className="command">
            <p className="command__title">Commander</p>
            <div className="command__resume">
                {/*Delivery Address     and     Shopping Card*/}
                <Container />
                {/*Summary*/}
                <Summary />
            </div>
        </div>
    );
}

export default Command;