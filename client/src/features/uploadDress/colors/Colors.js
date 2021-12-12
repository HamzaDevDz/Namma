import React, {useState} from 'react'
import "./Colors.css"
import Select from '@mui/material/Select';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function Colors() {

    const [numberColors, setNumberColors] = useState(1)

    return (
       <div className={"colors"}>
           {
               [...Array(numberColors)].map((n,i) => (
                   <div  className="colors__color">
                       {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                       <Select className="colors__color__select"
                               labelId="demo-simple-select-label"
                               label="Couleur"
                       >
                           <MenuItem  disabled className="colors__color__select__option">Couleur</MenuItem>
                           <MenuItem  className="colors__color__select__option">Noir</MenuItem>
                           <MenuItem  className="colors__color__select__option">Blanc</MenuItem>
                           <MenuItem  className="colors__color__select__option">Bleu</MenuItem>
                           <MenuItem  className="colors__color__select__option">Rouge</MenuItem>
                           <MenuItem  className="colors__color__select__option">Gris</MenuItem>
                       </Select>
                       <input type="number" className="colors__color__number" placeholder={"Color's number"}/>
                   </div >
               ))
           }
           <div className="colors__plus" onClick={()=>setNumberColors(numberColors + 1)}>+</div>
       </div>
    );
}

export default Colors;