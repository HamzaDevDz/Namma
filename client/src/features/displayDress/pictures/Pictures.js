import React from 'react'
import "./Pictures.css"

function Pictures({pathPictures}) {

    return (
        <div className={"displayDress__success__pictures"}>
            {
                pathPictures.length !== 0 ?
                    pathPictures.map((pathPicture, indexPicture) => (
                        <img key={indexPicture} src={pathPicture} alt={'picture'} className={"displayDress__success__pictures__picture"}/>
                    ))
                    :
                    'Aucune images disponibles pour cet article !'
            }
        </div>
    );
}

export default Pictures;