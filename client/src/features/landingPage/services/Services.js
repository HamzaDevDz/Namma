import React, {useCallback} from "react"
import './Services.css'
import {Footer} from "../../footer/Footer";
import {useHistory} from "react-router-dom";

export function Services () {

    console.log('Landing Page -> Services Page')

    const history = useHistory()

    const handleClick = useCallback(()=>{
        history.push('/home')
    },[])

    return(
        <div className={'landingPage__services'}>
            <div className={'landingPage__services__texts'}>
                <h1 className={'landingPage__services__texts__title'}>
                    Ce que nous voulons ?
                </h1>
                <div className={'landingPage__services__texts__items'}>
                    <p className={'landingPage__services__texts__items__item'}>
                        Vous fournir le vêtement qui saura vous plair
                    </p>
                    <p className={'landingPage__services__texts__items__item'}>
                        Vous faire sentir unique
                    </p>
                </div>
                <button className={'landingPage__services__texts__btn btnCustom'} onClick={handleClick}>
                    Voir
                </button>
            </div>
            <img className={'landingPage__services__imgHamza landingPage__services__img'}
                 src={'./landingPage/hamza.png'}
                 alt={''} />
            <img className={'landingPage__services__imgHanger landingPage__services__img'}
                 src={'./landingPage/hanger.png'}
                 alt={''} />
            <img className={'landingPage__services__imgHanger2 landingPage__services__img'}
                 src={'./landingPage/hanger.png'}
                 alt={''} />
            <Footer className={'landingPage__services__footer'} />
        </div>
    )
}