import React, {useRef, useState} from 'react';
import "./UploadDress.css";
import Colors from "./colors/Colors";

function UploadDress() {

    const refTitle = useRef("")
    const refDescription = useRef("")
    const refPrice = useRef("")
    const refPictures = useRef()
    const [numberSizesAndColors, setNumberSizesAndColors] = useState(1)

    return (
        <div className="uploadDress">
            <h1 className="uploadDress__name">Charger un vêtement !</h1>
            <input ref={refTitle} type="text" className="uploadDress__title" placeholder={"Title"}/>
            <input ref={refDescription} type="text" className="uploadDress__description" placeholder={"Description"}/>
            <input ref={refPrice} type="number" className="uploadDress__price" placeholder={"Price"}/>
            <input ref={refPictures} type="file" className="uploadDress__pictures" multiple
            />
            <div className="uploadDress__sizesAndColors">
                {
                    [...Array(numberSizesAndColors)].map((s,i)=>(
                        <div className={"uploadDress__sizesAndColors__sizeAndColors"}>
                            <input type="text" className="uploadDress__sizesAndColors__sizeAndColors__size" placeholder={"Size's title"}/>
                            <Colors />
                        </div>
                    ))
                }
                <div className="uploadDress__sizesAndColors__plus"
                     onClick={()=>setNumberSizesAndColors(numberSizesAndColors + 1)}
                >+</div>
            </div>
        </div>
    );
}

export default UploadDress;