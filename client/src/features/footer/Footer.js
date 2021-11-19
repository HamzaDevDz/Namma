import React from "react"
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import ChatIcon from '@mui/icons-material/Chat'

export function Footer ({className}) {
    return(
        <div className={'footer '+className}>
            <div className={'footer__item'}>
                <FacebookIcon className={'footer__item__icon'} />
                <p className={'footer__item__text'}>Facebook</p>
            </div>
            <div className={'footer__item'}>
                <InstagramIcon className={'footer__item__icon'} />
                <p className={'footer__item__text'}>Instagram</p>
            </div>
            <div className={'footer__item'}>
                <ChatIcon className={'footer__item__icon'} />
                <p className={'footer__item__text'}>Snapchat</p>
            </div>
        </div>
    )
}