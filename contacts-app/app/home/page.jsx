import React from "react";
import css from './home.module.css'
import Navbar from "@/components/Navbar/Nabvar";

export default function Home(){
    return (
        <div className={css.container}>
            <Navbar/>
        </div>
    )
}