import React, {useEffect, useState} from "react"
import './Header.css'
import Avatar from "@mui/material/Avatar";
import {useSelector} from "react-redux";
import {selectUser} from "./userSlice";
import {useLocation} from "react-router-dom";

export function Header() {

    console.log('Header Page')

    const user = useSelector(selectUser)
    const [theme, setTheme] = useState()

    let location = useLocation()

    useEffect(()=>{
        if(location.pathname === '/landing'){
            setTheme({
                'color': '#333333'
            })
        }else{
            setTheme({
                'color': '#FFFDF4',
                'backgroundColor': '#333333'
            })
        }
    }, [location])

    return(
        <div className={'header'} style={theme}>
            <div className={'header__logo'}>
                <p className={'header__logo__text'}>
                    NAMMA
                </p>
            </div>
            {
                user === null ?
                    <div className={'header__user'}>
                        <p className={'header__user__btn'}>Connexion</p>
                        <p className={'header__user__btn'}>Inscription</p>
                    </div>
                    :
                    <div className={'header__user'}>
                        <div className={'header__user__info'}>
                            <Avatar src={''} alt={''} className={'header__user__info__avatar'} />
                            <p className={'header__user__info__text'}></p>
                        </div>
                        <p className={'header__user__btn'}>Déconnexion</p>
                    </div>
            }
        </div>
    )
}