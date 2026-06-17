"use client";
import styles from "./geral.module.css";
import LikeIcon from "../icons/like";
import {ConfigIcon} from "../icons/config";
import LupaIcon from "../icons/lupa";
import { useState } from "react";
export default function Dark_bar() {
    const [btnpressed, setBtnPressed] = useState(false);
    return (
        <div className={styles.menuconfig}>
           <div className={styles.caixapesquisa}>
             <h1 className={styles.menutxtcolor}> Qual evento você quer ir? </h1>
             <div className={styles.agrupesquisa}> <input className={styles.inputpesquisa} placeholder="Pesquisar..."/><LupaIcon /></div>
            </div>
            <button className={styles.menubtn} onClick={() => {setBtnPressed(!btnpressed)}}>
                <div className={styles.secondarymenu} style={btnpressed ? {height: "250px"} : {height: "0%"}}>
                    <p className={styles.fontsecondmenu}> <LikeIcon /> Favoritos </p>
                    <p className={styles.fontconfigsecondmenu}> <ConfigIcon /> Configurações </p>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}