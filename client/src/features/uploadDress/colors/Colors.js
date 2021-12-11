import React, {useState} from 'react'
import "./Colors.css"

function Colors() {

    const [numberColors, setNumberColors] = useState(1)

    return (
       <div className={"colors"}>
           {
               [...Array(numberColors)].map((n,i) => (
                   <div className="colors__color">
                       <select className="colors__color__select">
                           <option disabled className="colors__color__select__option">Couleur</option>
                           <option className="colors__color__select__option">Noir</option>
                           <option className="colors__color__select__option">Blanc</option>
                           <option className="colors__color__select__option">Bleu</option>
                           <option className="colors__color__select__option">Rouge</option>
                           <option className="colors__color__select__option">Gris</option>
                       </select>
                       <input type="number" className="colors__color__number" placeholder={"Color's number"}/>
                   </div>
               ))
           }
           <div className="colors__plus" onClick={()=>setNumberColors(numberColors + 1)}>+</div>
       </div>
    );
}

export default Colors;