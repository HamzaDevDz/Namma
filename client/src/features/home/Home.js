import React from "react"
import './Home.css'
import NavBar from "./navBar/NavBar";
import ShoppingCard from "./shoppingCart/ShoppingCard";

export function Home () {
    console.log('Home Page')
    return(
        <div className={'home'}>
            <NavBar />
            <ShoppingCard />
        </div>
    )
}