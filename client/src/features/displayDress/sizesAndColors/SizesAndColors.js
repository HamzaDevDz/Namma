import React, {useState} from 'react'
import "./SizesAndColors.css"
import {useDispatch, useSelector} from "react-redux";
import {selectSelectedColor, setSelectedColor, setSelectedSize} from "../displayDressSlice";

function SizesAndColors({sizesAndColors}) {

    const dispatch = useDispatch()

    const [colors, setColors] = useState([])
    const [sizeSelected, setSizeSelected] = useState(false)
    const selectedColor = useSelector(selectSelectedColor)

    const toggleSize = function (elem, indexSize) {
        if(elem.classList.contains("selectedSize")){
            elem.classList.remove("selectedSize")
            setColors([])
            dispatch(setSelectedSize(""))
            setSizeSelected(false)
        }else{
            document.querySelectorAll(".displayDress__success__meta__sizesAndColors__sizes__size__selectArea").forEach(areaSize => {
                areaSize.classList.remove("selectedSize")
            })
            document.querySelectorAll(".displayDress__success__meta__sizesAndColors__colors__color__selectArea").forEach(areaColor => {
                areaColor.style.background = "none"
            })
            elem.classList.add("selectedSize")
            setColors(sizesAndColors[indexSize].colors)
            dispatch(setSelectedSize(sizesAndColors[indexSize].title))
            setSizeSelected(true)
        }
        dispatch(setSelectedColor(""))
    }

    const toggleColor = function (elem, titleColor, codeColor) {
        if(selectedColor === titleColor){
            dispatch(setSelectedColor(""))
            elem.style.background ="none"
        }else{
            document.querySelectorAll(".displayDress__success__meta__sizesAndColors__colors__color__selectArea").forEach(areaColor => {
                areaColor.style.background = "none"
            })
            dispatch(setSelectedColor(titleColor))
            elem.style.background = codeColor
        }
    }

    return (
        <div className={"displayDress__success__meta__sizesAndColors"}>
            {
                sizesAndColors.length === 0 ?
                    <div className={"displayDress__success__meta__sizesAndColors__sizes__empty"}>
                        Aucune Tailles disponibles pour cet article !
                    </div>
                    :
                    <>
                        <div className={"displayDress__success__meta__sizesAndColors__sizes"}>
                            <p className={"displayDress__success__meta__sizesAndColors__sizes__title"}>Tailles :</p>
                            {
                                sizesAndColors.map((size, indexSize) => (
                                    <div key={size.title} className={"displayDress__success__meta__sizesAndColors__sizes__size"}>
                                        <div className={"displayDress__success__meta__sizesAndColors__sizes__size__selectArea"}
                                             onClick={e => toggleSize(e.target, indexSize)}
                                        ></div>
                                        <p className={"displayDress__success__meta__sizesAndColors__sizes__size__title"}>{size.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            sizeSelected ?
                                <div className={"displayDress__success__meta__sizesAndColors__colors"}>
                                    <div className={"displayDress__success__meta__sizesAndColors__colors__title"}>Couleurs :</div>
                                    {
                                        colors.length !== 0 ?
                                            <>
                                            {
                                                colors.map(color => (
                                                    <div key={color.title} className={"displayDress__success__meta__sizesAndColors__colors__color"}>
                                                        <div className={"displayDress__success__meta__sizesAndColors__colors__color__selectArea"}
                                                             onClick={e => toggleColor(e.target, color.title, color.code)}
                                                        ></div>
                                                        <p className={"displayDress__success__meta__sizesAndColors__colors__color__title"}>{color.title}</p>
                                                    </div>
                                                ))
                                            }
                                            </>
                                            :
                                            ""
                                    }
                                </div>
                                :
                                ""
                        }
                    </>
            }
        </div>
    );
}

export default SizesAndColors;