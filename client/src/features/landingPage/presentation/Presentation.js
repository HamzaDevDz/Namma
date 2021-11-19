import React, {useCallback} from "react"
import {useHistory} from "react-router-dom"
import './Presentation.css'

export const Presentation = () => {

    console.log('Landing Page -> Presentation Page')

    const history = useHistory()

    const handleClick = useCallback(()=>{
        history.push('/home')
    },[])

    return(
        <div className={'landingPage__presentation'}>
            <div className={'landingPage__presentation__texts'}>
                <h1 className={'landingPage__presentation__texts__title'}>
                    NAMMA
                </h1>
                <p className={'landingPage__presentation__texts__description'}>
                    Grâce aux pouvoirs créateurs de la déesse Nammu,<br/><br/>
                    vous vous sentiriez à nouveau en vie, à nouveau refait,<br/><br/>
                    vêtu de nos habits les plus divins.
                </p>
                <button className={'landingPage__presentation__texts__btn btnCustom'} onClick={handleClick}>
                    Voir
                </button>
            </div>
            <img className={'landingPage__presentation__imgBaghdad landingPage__presentation__img'} src={'./landingPage/baghdad.png'} alt={''} />
            <img className={'landingPage__presentation__imgClothes landingPage__presentation__img'} src={'./landingPage/clothes.png'} alt={''} />
            <img className={'landingPage__presentation__imgHanger landingPage__presentation__img'} src={'./landingPage/hanger.png'} alt={''} />
            <img className={'landingPage__presentation__imgHanger2 landingPage__presentation__img'} src={'./landingPage/hanger.png'} alt={''} />
        </div>
    )
}