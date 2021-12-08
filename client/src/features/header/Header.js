import React, {useCallback, useEffect, useMemo, useState} from "react"
import './Header.css'
import Avatar from "@mui/material/Avatar";
import {useSelector} from "react-redux";
import {selectUser} from "./userSlice";
import {useHistory} from "react-router-dom";

export function Header() {

    console.log('Header Page')

    const history = useHistory()

    const user = useSelector(selectUser)
    const theme = useMemo(()=>{
        return({
            'color': '#FFFDF4',
            'backgroundColor': '#333333'
        })
    }, [])

    const handleClickHome = useCallback(() => {
        history.push('/home')
    }, [])

    return(
        <div className={'header'} style={theme}>
            <div className={'header__logo'} onClick={handleClickHome}>
                <p className={'header__logo__text'}>
                    NAMMA
                </p>
            </div>
            <div className="header__uploadDress"
               onClick={()=>history.push("/uploadDress")}
            >Charger un vêtement</div>
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