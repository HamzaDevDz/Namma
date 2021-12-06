import React from 'react'
import "./Command.css"
import Container from "./container/Container";
import Summary from "./summary/Summary";

function Command() {

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