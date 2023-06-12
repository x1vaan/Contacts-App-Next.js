'use client'

import React from "react";
import css from './Navbar.module.css'
import ContactsIcon from '@mui/icons-material/Contacts';
import { Avatar } from '@mui/material';


export default function Navbar(){
    return (
        <nav className={css.navContainer}>
            <ContactsIcon className={css.logo}/>
            <button>Add contact</button>
            <Avatar sx={{
                position : 'absolute',
                right : '2.5%',
                backgroundColor : '#3C3B3D',
                cursor : 'pointer'
            }}>
            IG
            </Avatar>
        </nav>
    )
}

function dropddown() {
    return (
        <div>
            
        </div>
    )
}