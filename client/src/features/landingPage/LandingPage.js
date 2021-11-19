import React from "react"
import './LandingPage.css'
import {Presentation} from "./presentation/Presentation";
import {Services} from "./services/Services";

export function LandingPage () {
    console.log('Landing Page')
    return(
        <div className={'landingPage'}>
            <Presentation />
            <Services />
        </div>
    )
}