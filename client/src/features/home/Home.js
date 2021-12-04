import React from "react"
import './Home.css'
import ShoppingCard from "../shoppingCard/ShoppingCard";
import Products from "./products/Products";
import NavBar from "../navBar/NavBar";

export function Home () {
    console.log('Home Page ---------- !')
    return(
        <div className={'home'}>
            {/*<NavBar />*/}
            {/*<ShoppingCard />*/}
            <Products />
        </div>
    )
}