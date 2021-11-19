import React, {useEffect, useState} from "react"
import './Header.css'
import Avatar from "@mui/material/Avatar";
import {useSelector} from "react-redux";
import {selectUser} from "./userSlice";

export function Header() {
    const user = useSelector(selectUser)
    const [theme, setTheme] = useState()

    console.log(window.location.pathname)

    useEffect(()=>{
        if(window.location.pathname === '/landing'){
            setTheme({
                'color': '#333333',
                // 'background': 'none'
            })
        }else{
            setTheme({
                'color': '#FFFDF4',
                'background-color': '#333333'
            })
        }
    }, [window.location.pathname])

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