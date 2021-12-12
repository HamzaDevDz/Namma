import React, {useRef, useState} from 'react';
import "./UploadDress.css";
import Colors from "./colors/Colors";
import axios from "axios";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";

function UploadDress() {

    const refTitle = useRef()
    const refDescription = useRef("")
    const refPrice = useRef("")
    const refPictures = useRef()
    const [numberSizesAndColors, setNumberSizesAndColors] = useState(1)

    async function uploadToDB() {

    }

    const handleValid = async function (e) {
        e.preventDefault()
        if(Array.from(refPictures.current.files).length === 0) return
        const newDress = {}
        const sizesArray = []
        const sizesNodes = document.querySelectorAll(".uploadDress__sizesAndColors__sizeAndColors")
        sizesNodes.forEach(sizeNode => {
            const sizeTitle = sizeNode.querySelector(".uploadDress__sizesAndColors__sizeAndColors__size").value
            const colorsArray = []
            sizeNode.querySelectorAll(".colors__color").forEach(colorNode => {
                const colorTitle = colorNode.querySelector(".colors__color__select").value
                const colorNumber = colorNode.querySelector(".colors__color__number").value
                colorsArray.push({title: colorTitle, number: colorNumber})
            })
            sizesArray.push({title: sizeTitle, colors: colorsArray})
        })
        newDress.title = refTitle.current.value
        newDress.description = refDescription.current.value
        newDress.price = refPrice.current.value
        newDress.sizesAndColors = sizesArray

        const formData = new FormData()
        Array.from(refPictures.current.files).forEach(file => {
            formData.append("images[]", file)
        })
        await axios.post("http://localhost:9000/pictures/upload", formData)
            .then(async function (filenames){
                if(typeof filenames !== "array") return
                newDress.pathPictures = filenames
                await axios.post("http://localhost:9000/products/upload", newDress).then(function (product) {
                    console.log(product)
                    console.log("upload product success !")
                })
            })
    }

    return (
        <form className="uploadDress">
            <h1 className="uploadDress__name">Charger un vêtement !</h1>
            <input label={"Titre"} ref={refTitle} type="text" className="uploadDress__title" placeholder={"Title"}
                   // onChange={e => {refTitle.current = e.target.value}}
            />
            <input ref={refDescription} type="text" className="uploadDress__description" placeholder={"Description"}/>
            <input ref={refPrice} type="number" className="uploadDress__price" placeholder={"Price"}/>
            <input ref={refPictures} type="file" className="uploadDress__pictures" multiple/>
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
            <button className="uploadDress__submit btnCustom"
                    type={"submit"}
                    onClick={handleValid}
            >Valider</button>
        </form>
    );
}

export default UploadDress;