import React from "react"
import './Home.css'
import NavBar from "./navBar/NavBar";

export function Home () {
    console.log('Home Page')
    return(
        <div className={'home'}>
            <NavBar />
        </div>
    )
}