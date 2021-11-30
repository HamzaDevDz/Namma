import React, {useState} from 'react';
import './DisplayDress.css'
import {useParams} from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress'
import Pictures from "./pictures/Pictures";
import SizesAndColors from "./sizesAndColors/SizesAndColors";
import Button from "./button/Button";
import {useSelector} from "react-redux";
import {selectDisplayDress, selectStatusDisplayDress} from "./displayDressSlice";

function DisplayDress() {

    console.log('DisplayDress Page')

    const {idDress} = useParams()

    const displayDress = useSelector(selectDisplayDress)
    const statusDisplayDress = useSelector(selectStatusDisplayDress)

    return (
        <div className={'displayDress'}>
            {
                !statusDisplayDress ?
                    <div className={"displayDress__loading"}>
                        <CircularProgress disableShrink />
                    </div>
                    :
                    displayDress.length === 0 ?
                        <div className={"displayDress__error"}>
                            L'article n'a pas été chargé !
                        </div>
                        :
                        <div className={"displayDress__success"}>
                            <Pictures pathPictures={displayDress.pathPictures} />
                            <div className={"displayDress__success__meta"}>
                                <div className={"displayDress__success__meta__information"}>
                                    <p className={"displayDress__success__meta__information__title"}>{displayDress.title}</p>
                                    <p className={"displayDress__success__meta__information__description"}>{displayDress.description}</p>
                                    <p className={"displayDress__success__meta__information__price"}>{displayDress.price} DA</p>
                                </div>
                                <SizesAndColors sizesAndColors={displayDress.sizesAndColors} />
                                <Button idDress={idDress} />
                            </div>
                        </div>
            }
        </div>


    );
}

export default DisplayDress;