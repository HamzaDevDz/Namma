import React, {useRef, useState} from 'react';
import "./UploadDress.css";

function UploadDress() {

    const refTitle = useRef("")
    const refDescription = useRef("")
    const refPrice = useRef("")
    const refPictures = useRef()

    return (
        <div className="uploadDress">
            <h1 className="uploadDress__name">Charger un vêtement !</h1>
            <input ref={refTitle} type="text" className="uploadDress__title" placeholder={"Title"}/>
            <input ref={refDescription} type="text" className="uploadDress__description" placeholder={"Description"}/>
            <input ref={refPrice} type="number" className="uploadDress__price" placeholder={"Price"}/>
            <input ref={refPictures} type="file" className="uploadDress__pictures" multiple
            />
            <div className="uploadDress__sizeAndColors">
                <input type="text" className="uploadDress__sizeAndColors__size" placeholder={"Size's title"}/>
                <div className="uploadDress__sizeAndColors__colors">
                    <input type="text" className="uploadDress__sizeAndColors__colors__title" placeholder={"Color's title"}/>
                    <input type="text" className="uploadDress__sizeAndColors__colors__code" placeholder={"Color's code"}/>
                    <input type="number" className="uploadDress__sizeAndColors__colors__title" placeholder={"Color's number"}/>
                </div>
            </div>
        </div>
    );
}

export default UploadDress;