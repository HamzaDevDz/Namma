import React, {useEffect} from 'react';
import './DisplayDress.css'
import {useParams} from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress'
import Pictures from "./pictures/Pictures";
import SizesAndColors from "./sizesAndColors/SizesAndColors";
import Button from "./button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getDisplayDress, selectDisplayDress, selectLoadDisplayDress} from "./displayDressSlice";

function DisplayDress() {

    console.log('DisplayDress Page ! ----------')

    const dispatch = useDispatch()
    const {idDress} = useParams()

    console.log(idDress)

    const displayDress = useSelector(selectDisplayDress)
    const loadDisplayDress = useSelector(selectLoadDisplayDress)

    useEffect(()=>{
        dispatch(getDisplayDress(idDress))
    }, [])

    return (
        <div className={'displayDress'}>
            {
                loadDisplayDress ?
                    <div className={"displayDress__loading"}>
                        <CircularProgress disableShrink />
                    </div>
                    :
                    displayDress.length === 0 ?
                        <div className={"displayDress__error"}>
                            Aucun contenu disponible !
                        </div>
                        :
                        <div className={"displayDress__success"}>
                            <Pictures pathPictures={displayDress.pathPictures} />
                            <div className={"displayDress__success__meta"}>
                                <div className={"displayDress__success__meta__information"}>
                                    <h1 className={"displayDress__success__meta__information__title"}>{displayDress.title}</h1>
                                    <p className={"displayDress__success__meta__information__description"}>{displayDress.description}</p>
                                    <p className={"displayDress__success__meta__information__price"}>{displayDress.price} DA</p>
                                </div>
                                <SizesAndColors sizesAndColors={displayDress.sizesAndColors} />
                                <Button />
                            </div>
                        </div>
            }
        </div>


    );
}

export default DisplayDress;