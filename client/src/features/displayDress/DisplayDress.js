import React, {useState} from 'react';
import './DisplayDress.css'
import {useSelector} from "react-redux";
import {selectShoppingCard} from "../home/shoppingCard/shoppingCardSlice"
import {useParams} from "react-router-dom"

function DisplayDress() {

    console.log('DisplayDress Page')
    const {idDress} = useParams()
    console.log(idDress)

    const [displayDress, setDisplayDress] = useState({
        __id: 1,
        title: 'Titre du vêtement',
        description: 'Parfait pour être classe',
        price: 5500,
        pathPictures: [
            './landingPage/baghdad.png',
            './landingPage/hamza.png',
            './landingPage/baghdad.png',
            './landingPage/hamza.png',
        ],
        sizesAndColors: [
            {
                title: 'S',
                colors: [
                    {title: 'Black', number: 5},
                    {title: 'White', number: 3},
                    {title: 'Gray', number: 2},
                ]
            },
            {
                title: 'M',
                colors: [
                    {title: 'Black', number: 7},
                    {title: 'White', number: 6},
                    {title: 'Gray', number: 5},
                ]
            },
            {
                title: 'L',
                colors: [
                    {title: 'Black', number: 10},
                    {title: 'White', number: 12},
                    {title: 'Gray', number: 6},
                ]
            },
        ],
    })

    const [statusDisplayDress, setStatusDisplayDress] = useState(true)

    const shoppingCard = useSelector(selectShoppingCard)
    const checkIfDressAlreadyExistInShoppingCard = (idDress) => {
        const index = shoppingCard.findIndex(item => item.__id === idDress)
        return index !== -1
    }

    const [colors, setColors] = useState([])

    return (
        <div className={'displayDress'}>
            {
                !statusDisplayDress ?
                    <div className={"displayDress__loading"}>
                        Chargement de l'article !
                    </div>
                    :
                    displayDress.length === 0 ?
                        <div className={"displayDress__error"}>
                            L'article n'a pas été chargé !
                        </div>
                        :
                        <div className={"displayDress__success"}>
                            <div className={"displayDress__success__pictures"}>
                                {
                                    displayDress.pathPictures.length !== 0 ?
                                        displayDress.pathPictures.map((pathPicture, indexPicture) => (
                                            <img key={indexPicture} src={pathPicture} alt={''} className={"displayDress__success__pictures__picture"}/>
                                        ))
                                        :
                                        'Aucune images disponibles pour cet article !'
                                }
                            </div>
                            <div className={"displayDress__success__meta"}>
                                <div className={"displayDress__success__meta__information"}>
                                    <p className={"displayDress__success__meta__information__title"}>{displayDress.title}</p>
                                    <p className={"displayDress__success__meta__information__description"}>{displayDress.description}</p>
                                    <p className={"displayDress__success__meta__information__price"}>{displayDress.price}</p>
                                </div>
                                {
                                    displayDress.sizesAndColors.length === 0 ?
                                        <div className={"displayDress__success__meta__sizes__empty"}>
                                            Aucune Tailles disponibles pour cet article !
                                        </div>
                                        :
                                        <div className={"displayDress__success__meta__sizes"}>
                                            <p className={"displayDress__success__meta__sizes__title"}>Tailles :</p>
                                            {
                                                displayDress.sizesAndColors.map((size, indexSize) => (
                                                    <div className={"displayDress__success__meta__sizes__size"}>
                                                        <div className={"displayDress__success__meta__sizes__size__selectArea"}
                                                        ></div>
                                                        <p className={"displayDress__success__meta__sizes__size__title"}>{size.title}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                }
                                {/*    Display Colors when click on Size !!!    */}
                                <div className={"displayDress__success__meta__btn"}>
                                    {
                                        !checkIfDressAlreadyExistInShoppingCard(idDress) ?
                                            <button className={"displayDress__btn__add"}>Ajouter au panier</button>
                                            :
                                            <button className={"displayDress__btn__remove"}>Retirer du panier</button>
                                    }
                                </div>
                            </div>
                        </div>
            }
        </div>


    );
}

export default DisplayDress;