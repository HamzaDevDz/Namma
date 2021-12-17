import React, {useState} from 'react';
import "./Select.css"

function Select({placeholder, options, handleSelectedColor}) {

    console.log("Select Component ! ------")

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState("")
    const handleShow = function () {
        setShow(!show)
    }
    const handleSelected = function (e) {
        handleSelectedColor(e.target.textContent)
        setSelected(e.target.textContent)
        setShow(false)
    }

    return (
        <div className={"select"}>
            <div className={"select__main"} onClick={handleShow}>{selected.length !== 0 ? selected : <span className={"select__main__placholder"}>{placeholder}</span>}</div>
            {
                show ?
                    <div className={"select__options"}>
                        {
                            options.length !== 0 ?
                                options.map((option, index) => (
                                    <div key={index} className={"select__options__option"} onClick={handleSelected}>{option}</div>
                                ))
                                :
                                ""
                        }
                    </div>
                    :
                    ""
            }
            <div className={"select__arrow"}>
                {
                    show ?
                        <span className={"select__arrow__top"}>&#8593;</span>
                        :
                        <span className={"select__arrow__bottom"}>&#8595;</span>

                }
            </div>
        </div>
    );
}

export default Select;