import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./Color.css"
import Select from "../../../select/Select";

function Color() {

    console.log("Color Component ! -----")

    const [colorCode, setColorCode] = useState("")

    const handleSelectedColor = function (color) {
        switch (color) {
            case "Noir":
                setColorCode("#000000")
                break
            case "Blanc":
                setColorCode("#FFFFFF")
                break
            case "Bleu":
                setColorCode("#0000FF")
                break
            case "Rouge":
                setColorCode("#FF0000")
                break
            case "Gris":
                setColorCode("#808080")
        }
    }

    return (
        <div  className="colors__color">
            <Select placeholder={"Couleur"} options={["Noir", "Blanc", "Bleu", "Rouge", "Gris"]} handleSelectedColor={handleSelectedColor} />
            <input disabled type={"text"} className={"colors__color__code"} value={colorCode} placeholder={"Color Code"}/>
            <input type="number" className="colors__color__number" placeholder={"Color's number"}/>
        </div >
    );
}

export default Color;