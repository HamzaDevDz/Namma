import React, {useEffect} from "react"
import './LandingPage.css'
import {Presentation} from "./presentation/Presentation";
import {Services} from "./services/Services";

export function LandingPage () {
    console.log('Landing Page ! -----------------')

    useEffect(()=>{
        document.querySelector('.navBar').style.display = 'none'
    },[])

    return(
        <div className={'landingPage'}>
            <Presentation />
            <Services />
        </div>
    )
}