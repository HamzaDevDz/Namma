import React, {useEffect, useState} from 'react'
import "./Colors.css"
import Color from "./color/Color";


function Colors() {

    console.log("Colors Component ! ---------------")

    const [numberColors, setNumberColors] = useState(1)

    return (
       <div className={"colors"}>
           {
               [...Array(numberColors)].map((n,i) => (
                   <Color key={i}/>
               ))
           }
           <div className="colors__plus" onClick={()=>setNumberColors(numberColors + 1)}>+</div>
       </div>
    );
}

export default Colors;