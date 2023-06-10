"use client"

import Link from 'next/link'
import css from './page.module.css'
import { Button } from '@mui/material'

export default function Landing() {
  return (
    <div className={css.container}>
       <h1>Contacts App</h1>
       <p>Now you can store your contacts.</p>
       <Link href='/login'><Button variant='contained' className={css.button}>Get Started</Button></Link>
    </div>
  )
}
