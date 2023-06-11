"use client"

import React from "react";
import css from './login.module.css'
import TextField from '@mui/material/TextField';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Link from 'next/link'
import { Button } from '@mui/material'

export default function Login(){

    return (
        <div className={css.container}>

            <div className={css.containerAuth}>
                <h1>Log in</h1>
                <HorizontalRuleIcon className={css.line}/>
                <Link href='/register'><h1 className={css.register}>Register</h1></Link>
            </div>

            <TextField 
            variant="outlined" 
            type="string" 
            label='Email' 
            required 
            className={css.emailInput}
            />
            <TextField
            variant="outlined"
            type="password"
            label='Password'
            required
            className={css.passwordInput}
            />
            <Button variant="contained" className={css.button}>Log in</Button>
        </div>
    )
}