import React from 'react'
import "./Pictures.css"
import {getImagePrefix} from "../../../ServerPrefix";

function Pictures({pathPictures}) {

    console.log("Pictures Page ! ----------")

    return (
        <div className={"displayDress__success__pictures"}>
            {
                pathPictures.length !== 0 ?
                    pathPictures.map((pathPicture, indexPicture) => (
                        <img key={indexPicture} src={getImagePrefix + pathPicture} alt={'picture'} className={"displayDress__success__pictures__picture"}/>
                    ))
                    :
                    'Aucune images disponibles pour cet article !'
            }
        </div>
    );
}

export default Pictures;