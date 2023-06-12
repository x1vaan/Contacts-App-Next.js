'use client'

import React,{useState}from "react";
import css from './Navbar.module.css'
import ContactsIcon from '@mui/icons-material/Contacts';
import { Avatar } from '@mui/material';
import { TextField } from '@mui/material';


export default function Navbar(){
    const [open,setOpen] = useState(false);
    return (
        <nav className={css.navContainer}>
            <ContactsIcon className={css.logo}/>
            <TextField variant="filled" 
            label='Search contact' 
            type="string" 
            className={css.search}
            size="small"
           />
            <button>Add contact</button>
            <Avatar sx={{
              position : 'absolute',
              right : '2.5%',
              backgroundColor : '#3C3B3D',
              cursor : 'pointer'}}
              onClick={()=> setOpen(!open)}
              >
               IG
            </Avatar>
            {open ? <Dropdown/> : ''}
        </nav>
    )
}

function Dropdown() {
    return (
        <div className={css.Dropdown}>
            <ul>
                <li>My profile</li>
                <li>Sign out</li>
            </ul>
        </div>
    )
}